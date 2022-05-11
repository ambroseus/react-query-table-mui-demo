const sleep = ms => new Promise(r => setTimeout(r, ms));

export async function apiGetData(params) {
  console.log(`apiGetData > params`, params)

  await sleep(3000)
  
  //throw new Error('some error')

  const { page, size} = params
  if (size === 10) {
    return {
        content: [
          {id:1, name:'name1'},
          {id:2, name:'name2'},
          {id:3, name:'name3'},
          {id:4, name:'name4'},
          {id:5, name:'name5'},
          {id:6, name:'name6'},
        ],
        totalElements: 6,
    }
  }
  if (page === 0) {
    return {
      content: [
        {id:1, name:'name1'},
        {id:2, name:'name2'},
        {id:3, name:'name3'},
        {id:4, name:'name4'},
        {id:5, name:'name5'},
      ],
      totalElements: 6,
    }
  }
  else {
    return {
      content: [
        {id:6, name:'name6'},
      ],
      totalElements: 6,
    }
  }
}

