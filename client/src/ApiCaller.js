async function callMyApi(url,data,apiMethod='GET',headers=null){

    const message="Sorry, the request was unsuccessfull. Please come back later.";
    var base_url=process.env.REACT_APP_API_END_POINT;
    var token=JSON.parse(localStorage.getItem('token'));        

    if(headers==null){
        headers={
            "Accept":"*/*",
        }
    }
    if(token){
        headers.Authorization="Bearer "+token
    }
    console.log(headers);


    if (apiMethod=='POST'){
        return fetch(base_url+url,{
            method:apiMethod,
            headers:headers,
            body:data
        }).then(res=>{
            var jres=res.json();
            return jres;
        })
        .catch(e=>{
            console.log('ssss'+e);
            return {
                'success':false,
                'message':message,
                'ecode':e
            }
        });
    }
    else if (apiMethod=='GET'){
        return fetch(base_url+url,{
            method:apiMethod,
            headers:headers,
            //body:data
        }).then(res=>{
            var jres=res.json()
            return jres;    
        })
        .catch(e=>{
            return {
                'success':false,
                'message':message,
                'ecode':e
            }
        });
    }else{
        return {
            'success':false,
            'message':'Method not allowed.'
        }
    }
}

export default callMyApi;