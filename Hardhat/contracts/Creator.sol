//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";

contract Creator is ERC1155URIStorage{
    address payable private owner;
    using Counters for Counters.Counter;
    Counters.Counter private tokenIds;
    Counters.Counter private itemsSold;
    uint256[] private NFTIds;
    uint256[] private SocialTokenIds;
    uint256[] private ListedNFTIds;
    uint256 listingPrice=0.02 ether;

    struct ListedNFT{
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        string Uri;
    }

    struct NFT{
        uint256 tokenId;
        address payable owner;
        address payable seller;
        bool isListed;
        string Uri;
    }

    struct SocialToken{
        uint256 tokenId;
        address payable owner;
        uint256 amount;
        uint256 price;
    }

    event NFTListedSuccess(
        uint256 indexed tokenId,
        address owner,
        address seller,
        uint256 price,
        bool isCurrentlyListed
    );

    event NFTCreationSuccess(
        uint256 tokenId,
        address owner,
        string uri
    );

    event TokenCreationSuccess(
        uint256 indexed tokenId,
        address payable owner,
        uint256 amount,
        uint price
    );

    mapping (uint256 => ListedNFT) private idToListedNFT;
    mapping (uint256 => NFT) private idToNFT;
    mapping (uint256 => SocialToken) private idToSocialToken;
    uint256 private nativeTokenId;

    constructor() ERC1155(""){
        owner = payable(msg.sender);
        uint256 currentId=tokenIds.current();
        _mint(msg.sender,currentId,10**24,'');
        nativeTokenId=currentId;
    }

    function getNativeTokenId() public view returns(uint256) {
        return nativeTokenId;
    }

    function getListedPriceNFT() public view returns(uint256){
        return listingPrice;
    }

    function getLatestNFT() public view returns (ListedNFT memory){
        return idToListedNFT[NFTIds.length-1];
    }

    function getLatestListedSocialToken() public view returns (SocialToken memory){
        return idToSocialToken[SocialTokenIds.length-1];
    }

    function getListedNFTForId(uint256 _NFTId) public view returns (ListedNFT memory){
        return idToListedNFT[_NFTId];
    }

    function getNFTForId(uint256 _tokenId) public view returns(NFT memory){
        return idToNFT[_tokenId];
    }

    function getSocialTokenForId(uint256 _tokenId) public view returns (SocialToken memory){
        return idToSocialToken[_tokenId];
    }

    function getCurrentToken() public view returns(uint256){
        return tokenIds.current();
    }

    function createNFT(string memory tokenURI) public payable returns (uint256){
        require(msg.value == listingPrice,'Please send current listing Price');
        tokenIds.increment();
        uint256 newTokenId=tokenIds.current();
        _mint(msg.sender,newTokenId,1,'');
        _setURI(newTokenId,tokenURI);
        NFTIds.push(newTokenId);
        idToNFT[newTokenId]=NFT(
            newTokenId,
            payable(msg.sender),
            payable(msg.sender),
            false,
            tokenURI
            );
        emit NFTCreationSuccess(
            newTokenId,
            msg.sender,
            tokenURI
        );
        return newTokenId;
    }

    function listNFT(uint256 price,uint256 tokenId) public payable returns(bool){
        require(price>0,'price cannot be negative');
        idToListedNFT[tokenId]=ListedNFT(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            uri(tokenId)
        );
        _safeTransferFrom(msg.sender,address(this),tokenId,1,"");
        ListedNFTIds.push(tokenId);
        emit NFTListedSuccess(
            tokenId,
            address(this),
            msg.sender,
            price,
            true
        );
        return true;
    }

    function getAllNFTs() public view returns (NFT[] memory){
        uint nftCount=NFTIds.length;
        NFT[] memory nfts=new NFT[](nftCount);
        uint i;
        for(i=0;i<nftCount;i++){
            NFT storage currentItem=idToNFT[NFTIds[i]];
            nfts[i]=currentItem;
        }
        return nfts;
    }

    function getMyNFTs() public view returns(NFT[] memory){
        uint totalNftCount=NFTIds.length;
        uint itemCount=0;
        uint currentIndex=0;
        uint currentId;
        for (uint i=0;i<totalNftCount;i++){
            if(idToNFT[i+1].owner==msg.sender || idToNFT[i+1].seller == msg.sender){
                itemCount+=1;
            }
        }
        NFT[] memory items = new NFT[](itemCount);
        for(uint i=0;i<totalNftCount;i++){
            if(idToNFT[i+1].owner==msg.sender || idToNFT[i+1].seller == msg.sender){
                currentId=i+1;
                NFT storage currentItem=idToNFT[NFTIds[currentId]];
                items[currentIndex]=currentItem;
            }
        }
        return items;
    }

    function sellNFT(uint256 tokenId) public payable {
        uint price =idToListedNFT[tokenId].price;
        address seller =idToListedNFT[tokenId].seller;
        require(msg.value == price,"Please sender asking Price");
        _safeTransferFrom(address(this),msg.sender,tokenId,1,'');
        _setApprovalForAll(seller,address(this),true);
        payable(owner).transfer(listingPrice);
        payable(seller).transfer(msg.value);
    }
}