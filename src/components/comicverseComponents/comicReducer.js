


export const defaultState = {
  selectedNFTs: [],
  currentIndex: 0,
  isModalOpen: false,
  comicImgPath: '', 
  isBasePreview: false,
  showTextBubbles: true,
  comicPreviewIndex: 0 
}


  // gets image path given selected nfts
export const reducer = (state,action) => {
    const getImgPath = (isPreview, showTextBubble) =>{

      let sortedList= [...state.selectedNFTs];
      
      sortedList.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
      })

      let namePath = `./Assets/comicPreview/${showTextBubble ? "words" : "nowords"}/`

      if (!isPreview && sortedList.length > 0){
      sortedList.map((nft)=>{
          if(nft.name) namePath += nft.name +'_'
          // if(nft.name) namePath += nft.name + nft.number +'_'
      })}else{
        namePath += 'base_';
      }
      namePath = namePath.slice(0, -1)
      namePath += '.jpg'

      return namePath;
    
  }

  // cycles through inventory
  if (action.type === 'CHANGE_INDEX'){
      const lastIndex = inventory.length-1;
      let finalNewIndex;

      if(action.newIndex < 0){
          finalNewIndex = lastIndex;
      }
      else if(action.newIndex > lastIndex){
          finalNewIndex = 0
      }else{
          finalNewIndex = action.newIndex;
      }
      return {
      ...state,
      currentIndex: finalNewIndex,
    }

  } else if (action.type === 'ADD_SELECTED'){
    const newSelected = [...state.selectedNFTs, action.selected]

    return {
      ...state,
      selectedNFTs: newSelected,
    }
  } else if (action.type === 'REMOVE_SELECTED') {
     const newSelected = state.selectedNFTs.filter((item) => item.id !== action.selected.id);

     return {
      ...state,
      selectedNFTs: newSelected,
    }
  } else if (action.type === 'DISPLAY_MODAL') {
    const imgPath = getImgPath( action.preview, state.showTextBubbles);

    return {
       ...state,
      isBasePreview: action.preview,
      comicImgPath: imgPath,
      isModalOpen: true,
      comicPreviewIndex: 0,
     
    }
  } else if (action.type === 'TOGGLE_BUBBLE') {
     const imgPath = getImgPath( state.isBasePreview, action.newValue,);

    return {
       ...state,
      showTextBubbles: action.newValue,
      comicImgPath: imgPath
    }
  } else if (action.type === 'HIDE_MODAL') {

    return {
      ...state,
      isBasePreview: false,
      // comicImgPath: '',
      isModalOpen: false,
      
    }
  } else if (action.type === 'CANCEL_MODAL') {

    return {
      ...state,
      isBasePreview: false,
      // comicImgPath: '',
      isModalOpen: false,
      selectedNFTs: [],
    }
  } else  if (action.type === 'CHANGE_PREVIEW_INDEX'){
      const lastIndex = 1;
      let finalNewIndex;

      if(action.newIndex < 0){
          finalNewIndex = lastIndex;
      }
      else if(action.newIndex > lastIndex){
          finalNewIndex = 0
      }else{
          finalNewIndex = action.newIndex;
      }
      return {
      ...state,
      comicPreviewIndex: finalNewIndex,
    }
  }

  return new Error('no matching action type')
}



let zeusInfo = {
    id: 'zeus2423',
    name: 'zeus',
    number: '2423',
    imgPath: './Assets/gods/zeus_nft.jpg',
    xp: 2500,
    xpBars: ['81%', '90%','73%','57%'],
    traitsList : [
    {   rarity: '6',attribute: 'emotion', value: 'rage'   },
    {   rarity: '1',attribute: 'weapon', value: 'lightning'   },
    {   rarity: '40',attribute: 'weapon color', value: 'blue'   },
    {   rarity: '8',attribute: 'arm band', value: 'gold'   },
    {   rarity: '2',attribute: 'eyes', value: 'blue glow'   },
    {   rarity: '83',attribute: 'beard', value: 'white'   },
    {   rarity: '71',attribute: 'hand one', value: 'pointing'   },
    {   rarity: '5',attribute: 'attire', value: 'gold silk'   },
    {   rarity: '48',attribute: 'chest plate', value: 'none'   },
    {   rarity: '5',attribute: 'belt', value: 'gold'   },
    {   rarity: '5',attribute: 'leg guard', value: 'gold'   },
    {   rarity: '20',attribute: 'accents', value: 'light blue'   },
    {   rarity: '5',attribute: 'background', value: 'sky'   },
]
}

let poseidonInfo = {
    id:'poseidon844',
    name: 'poseidon',
    number: '844',
    imgPath: './Assets/gods/poseidon_nft.jpg',
    xp: 1750,
    xpBars: ['55%', '62%','36%','97%'],
    traitsList : [
    {   rarity: '43',attribute: 'emotion', value: 'rage'   },
    {   rarity: '5',attribute: 'weapon', value: 'trident'   },
    {   rarity: '27',attribute: 'weapon color', value: 'gold'   },
    {   rarity: '51',attribute: 'arm band', value: 'gold'   },
    {   rarity: '7',attribute: 'eyes', value: 'green glow'   },
    {   rarity: '69',attribute: 'beard', value: 'white'   },
    {   rarity: '23',attribute: 'hand one', value: 'fist'   },
    {   rarity: '22',attribute: 'attire', value: 'green silk'   },
    {   rarity: '72',attribute: 'chest plate', value: 'none'   },
    {   rarity: '15',attribute: 'belt', value: 'gold'   },
    {   rarity: '24',attribute: 'leg guard', value: 'gold'   },
    {   rarity: '25',attribute: 'accents', value: 'light green'   },
    {   rarity: '11',attribute: 'background', value: 'sea'   },
]
}

let hadesInfo = {
    id: 'hades65',
    name: 'hades',
    number: '65',
    imgPath: './Assets/gods/hades_nft.jpg',
    xp: 1500,
    xpBars: ['94%', '49%','55%','75%'],
    traitsList : [
    {   rarity: '65',attribute: 'emotion', value: 'menacing'   },
    {   rarity: '64',attribute: 'weapon', value: 'bident'   },
    {   rarity: '23',attribute: 'weapon color', value: 'silve'   },
    {   rarity: '8',attribute: 'arm band', value: 'burgandy'   },
    {   rarity: '74',attribute: 'eyes', value: 'red'   },
    {   rarity: '82',attribute: 'beard', value: 'red'   },
    {   rarity: '33',attribute: 'hand one', value: 'leash'   },
    {   rarity: '52',attribute: 'attire', value: 'purple silk'   },
    {   rarity: '76',attribute: 'chest plate', value: 'none'   },
    {   rarity: '6',attribute: 'belt', value: 'skull'   },
    {   rarity: '21',attribute: 'leg guard', value: 'purple'   },
    {   rarity: '20',attribute: 'accents', value: 'blue'   },
    {   rarity: '53',attribute: 'background', value: 'underworld'   },
]
}

export const inventory = [zeusInfo,poseidonInfo,hadesInfo];
