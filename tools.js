//Dont edit this code//
function $login(){
  var a=document.getElementById('user').value;
  if(a=='faptv'||a=='Faptv'){
              document.getElementById('text').innerHTML="<font color='#C0FF3E'>Đang cập nhật dữ liệu</font><img src='http://www.wallies.com/filebin/images/loading_apple.gif'width='20px' id='load'>";
              var _result=function(){
              document.getElementById('text').innerHTML="<font color='#00BFFF'>Xác nhận thành công</font><img src='https://www.shareicon.net/data/2015/09/24/106388_add_512x512.png'width='18px' id='load'>"+'<font color="#00CED1">'+'</br>'+'</br>'+'FAPTV'+Math.random();


              }
              setTimeout(_result,10000);

    }
  if(a==""){
     document.getElementById('text').innerHTML="<font color='#C0FF3E'>Bạn chưa nhập CODE</font>";
  }
  else if(a!='faptv'&&a!='Faptv'){
      document.getElementById('text').innerHTML="<font color='#C0FF3E'>Đang cập nhật dữ liệu</font><img src='http://www.wallies.com/filebin/images/loading_apple.gif'width='20px' id='load'>";
              var _result=function(){
              document.getElementById('text').innerHTML="<font color='red'>Xác nhận thất bại</font><img src='http://img3.wikia.nocookie.net/__cb20130403220653/sqmegapolis/images/3/30/X-mark-3-256.png'width='18px' id='load'>";
              }
              setTimeout(_result,10000);
  }
}












                             