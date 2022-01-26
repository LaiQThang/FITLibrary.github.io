var dem = 0;
        nextpage();

        function nextpage(){
            var i;
            var x = document.getElementsByClassName("js-nextpage");
            for(i = 0 ; i < x.length ; i++){
                x[i].style.display = "none";
            }
            dem ++;
            if(dem>x.length){dem=1}
            x[dem-1].style.display="flex";
            setTimeout(nextpage,5000);
        }
        function slide_left(){
            var a = document.getElementsByClassName("js-nextpage");
            var dem = a.length ;
            for(i = 0 ; i < dem ; i++){
                if(a[i].style.display == "flex"){
                    a[i].style.display = "none";
                    if(i==0) {
                        a[dem-1].style.display = "flex";
                        console.log(a[dem-1]);
                        break;
                    }
                    else{
                        a[i-1].style.display = "flex";
                        break;
                    }
                }
            }
        }
        function slide_right(){
            var a = document.getElementsByClassName("js-nextpage");
            var dem = a.length ;
            for(i = 0 ; i < dem ; i++){
                if(a[i].style.display == "flex"){
                    a[i].style.display = "none";
                    if(i==dem-1) {
                        a[0].style.display = "flex";
                        break;
                    }
                    else{
                        a[i+1].style.display = "flex";
                        break;
                    }
                }
            }
        }