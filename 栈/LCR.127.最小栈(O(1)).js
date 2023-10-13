/*
请你设计一个 最小栈 。它提供 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

 

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.stack2 = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(this.stack2[this.stack2.length-1] >= val || this.stack2.length == 0) {
        this.stack2.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.pop() == this.stack2[this.stack2.length-1]) {
        this.stack2.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack2[this.stack2.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */