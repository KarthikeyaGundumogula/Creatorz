//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";

contract Creator is ERC1155URIStorage{
    address payable private owner;
    using Counters for Counters.Counter;
    Counters.Counter private tokenIds;
    Counters.Counter private itemsSold;
    uint256 private latestNFTTokenId;
    uint256 private latestSocialTokenId;
    uint256 listingPrice=0.02 ether;

    struct ListedNFT{
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
    }

    struct NFT{
        uint256 tokenId;
        address payable owner;
        bool isListed;
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
        return idToListedNFT[latestNFTTokenId];
    }

    function getLatestListedSocialToken() public view returns (SocialToken memory){
        return idToSocialToken[latestSocialTokenId];
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
        latestNFTTokenId=newTokenId;
        idToNFT[newTokenId]=NFT(
            newTokenId,
            payable(msg.sender),
            false
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
            price
        );
        _safeTransferFrom(msg.sender,address(this),tokenId,1,"");
        emit NFTListedSuccess(
            tokenId,
            address(this),
            msg.sender,
            price,
            true
        );
        return true;
    }
}