Promise.resolve().then(()=>document.addEventListener('copy', e => {
  // let data = e.clipboardData.getData("Text")
  // let idx = data.lastIndexOf("..."),
    // res = idx===-1?data:data.substring(0, idx)
  // console.log(data,res,idx)
  // console.log(window.getSelection().toString().trim())
  e.clipboardData.setData("Text", window.getSelection().toString().trim())
}))
