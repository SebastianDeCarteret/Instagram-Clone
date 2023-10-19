let text = "";
let alphabet =
  "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s,t,u,v,w,x,y,z".split(
    ","
  );
let wordCount;

function randomText(wordCount) {
  for (var i = 0; i < wordCount; i++) {
    var rand = null;
    for (var x = 0; x < 7; x++) {
      rand = Math.floor(Math.random() * alphabet.length);
      text += alphabet[rand];
    }
    if (i < wordCount - 1) text += " ";
    else text += "";
  }
  //console.log(`Count: ${wordCount} \n Words: ${text}`);
  wordCount = 0;
  return text;
}
console.log(randomText(1));
