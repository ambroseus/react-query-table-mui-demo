const sleep = ms => new Promise(r => setTimeout(r, ms));

export async function apiGetData(params) {
  console.log(`apiGetData > params`, params)

  //throw new Error('some error')

  await sleep(3000)

  return {
      content: [],
      totalElements: 0,
  }
}

