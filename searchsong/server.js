let express=require('express');
let axios=require('axios');
let app=express();
app.get('/search',async (req,res)=>{
    let result;
    await axios({
        url:"https://saavn.dev/api/search/songs",
        method:"GET",
        params:{query:req.query.query}
    }).then(e=>result=e.data.data.results).catch(err=>result=err);
    response=result.map(e=>({imageUrl:e.image[2].url,song:e.downloadUrl[4].url,name:e.name,author:e.artists.primary[0].name}));
    res.json(response);
    res.end();
})
app.listen(8080,()=>console.log("Server Connected"));