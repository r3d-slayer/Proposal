let highest1 = 1;

let b1 = document.body.querySelectorAll('.aunty');
console.log(b1);



class aunty{
    hold = false;
    previousX = 0;
    previousY = 0
    MouseX = 0;
    MouseY = 0;
    currentX = 0;
    currentY = 0;
    velocityX = 0;
    velocityY = 0;


    init(paper1){
        paper1.addEventListener('mousedown',(e)=>{
            this.hold = true;
            paper1.style.zIndex = highest1;
            highest1 +=1;
            console.log(this.hold);

            if(e.button===0){
                this.previousX = this.MouseX
                this.previousY = this.MouseY
                // console.log(this.previousX);
            }
            
        })

        document.addEventListener('mousemove',(e)=>{
            this.MouseX = e.clientX;
            console.log(this.MouseX)
            this.MouseY = e.clientY;

            this.velocityX = this.MouseX - this.previousX;
            this.velocityY = this.MouseY - this.previousY;

            if(this.hold){
                this.currentX+=this.velocityX;
                this.currentY+=this.velocityY;

                this.previousX = this.MouseX;
                this.previousY = this.MouseY;

                paper1.style.transform = `translateX(${this.currentX}px) translateY(${this.currentY}px)`;
            }


        })

        window.addEventListener('mouseup',(e)=>{
            this.hold = false
        })
    }
}


const paper = Array.from(document.body.querySelectorAll('.aunty'));
paper.forEach(paper1 =>{
    const p = new aunty();
    p.init(paper1);
})
