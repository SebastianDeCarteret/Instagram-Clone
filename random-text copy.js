let text2 = "";
let alphabet2 =
  "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s,t,u,v,w,x,y,z".split(
    ","
  );
let wordCount2;

function randomText2(wordCount2) {
  for (var i = 0; i < wordCount2; i++) {
    var rand = null;
    for (var x = 0; x < 7; x++) {
      rand = Math.floor(Math.random() * alphabet2.length);
      text2 += alphabet2[rand];
    }
    if (i < wordCount2 - 1) text2 += " ";
    else text2 += "";
  }
  //console.log(`Count: ${wordCount2} \n Words: ${text2}`);
  wordCount2 = 0;
  return `#${text2}`;
}
console.log(randomText(1));
