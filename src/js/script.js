window.onload = function() {


    
    fetch('/res/json/myjson.json')
    //fetch('https://api.npoint.io/28cb16a4a0ebad1e26b5')
        .then((response) => response.json())
        .then(json => {
        
            

            for(let i= 0; i<json.length; i++){
                let post = json[i];

                let div = document.createElement('div')
                div.className = "post"

                let postUpper = document.createElement('div')
                postUpper.className = "postheader"

                let postBody = document.createElement('div')
                postBody.className = "postbody"

                if(post.profilepic != ""){
                    let profilepic = document.createElement('img')
                    profilepic.src = post.profilepic
                    profilepic.width = 40;
                    profilepic.height = 40;
                    postUpper.appendChild(profilepic)
                }else{
                    let profilepic = document.createElement('img')
                    profilepic.src = "/res/img/noprofilepic.jpg"
                    profilepic.width = 40;
                    profilepic.height = 40;
                    postUpper.appendChild(profilepic)
                }

                let date = document.createElement('p')
                date.innerText = post.date
                postUpper.appendChild(date)

                if(post.postimage != ""){
                    let img = document.createElement('img')
                    img.src = post.postimage
                    postBody.appendChild(img)
                }

                let postText = document.createElement('p')
                postText.innerText = post.posttext

                postBody.appendChild(postText)

                let postFooter = document.createElement('div')
                postFooter.className = "postfooter"

                let likeButton = document.createElement('img')
                likeButton.src = "/res/img/like.png"
                likeButton.height = 47;
                likeButton.width = 40;
                postFooter.appendChild(likeButton)


                div.appendChild(postUpper)
                div.appendChild(postBody)
                div.appendChild(postFooter)

    

                document.querySelector(".posts").appendChild(div)
            }
        })



}