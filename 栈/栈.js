class Stack {
    constructor() {
        this.newArr = []
    };

    //压栈方法，将元素压入栈中
    push(item) {
        this.newArr.push(item)
    }
    //出栈方法，从栈中取出元素，返回出栈的元素
    pop() {
        return this.newArr.pop()
    }
    //查看栈顶的元素
    peek() {
        return this.newArr[this.newArr.length-1]
    }
    //查看栈是否为空
    isEmpty() {
        return this.newArr.length === 0
    }
    //查看栈的长度
    size() {
        return this.newArr.length
    }
    //返回以字符串形式的栈元素内容
    toString() {
        let res = ''
        for(let item of this.newArr) {
            // console.log(typeof item);
            res += item + ' '
            // console.log(typeof res);
        }
        return res
    }

}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.toString());
