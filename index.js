let bod = document.getElementsByTagName('body')[0];
let div = document.body.querySelectorAll('.aunty');
let div1 = document.body.getElementsByClassName('load1')[0];
let audio = document.body.getElementsByClassName('audio')[0];

div1.classList.add('load');
const change = Array.from(div);
// change.forEach(element =>{
//     element.classList.add('hide1');
// })
bod.classList.add('hide');
audio.classList.add('hide1');

window.addEventListener('load',(e)=>{
    bod.classList.remove('hide');
    change.forEach(element =>{
        element.classList.remove('hide1');
    })
    div1.classList.add('hide1');
    audio.classList.remove('hide1');

})

let highest1 = 1;

let b1 = document.body.getElementsByTagName('div');
const b2 = document.body.querySelectorAll('.aunty');
let aunt = document.getElementsByTagName('body')[0];

class aunty {
    hold = false;
    previousX = 0;
    previousY = 0
    MouseX = 0;
    MouseY = 0;
    currentX = 0;
    currentY = 0;
    velocityX = 0;
    velocityY = 0;

    init(paper1) {
        paper1.addEventListener('mousedown', (e) => {
            this.hold = true;
            paper1.style.zIndex = highest1;
            highest1 += 1;
            if (e.button === 0) {
                this.previousX = this.MouseX
                this.previousY = this.MouseY
            }

        })

        document.addEventListener('mousemove', (e) => {
            this.MouseX = e.clientX;
            this.MouseY = e.clientY;

            this.velocityX = this.MouseX - this.previousX;
            this.velocityY = this.MouseY - this.previousY;

            if (this.hold) {
                this.currentX += this.velocityX;
                this.currentY += this.velocityY;

                this.previousX = this.MouseX;
                this.previousY = this.MouseY;

                paper1.style.transform = `translateX(${this.currentX}px) translateY(${this.currentY}px)`;
            }

        })

        window.addEventListener('mouseup', (e) => {
            this.hold = false
        })
    }
}


const paper = Array.from(document.body.querySelectorAll('.aunty'));
paper.forEach(paper1 => {
    const p = new aunty();
    p.init(paper1);
})
