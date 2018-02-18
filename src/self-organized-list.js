class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(data) {
        var node = new Node(data);
        if(this.length == 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    at(index) {
        var node = this.head,
            count=0,
            length = this.length;

        if (length === 0 || index < 0 || index > this.length) {
            return null;
        }

        for(;count<index;count++){
            node=node.next;
        }
        return node.data;
    }

    findNode(data) {
        var node = this.head;
        var flag=true;
        while(flag/*&&(node.next||node===this.tail)*/){
            if(node.data===data){
                flag=false;
            }
            else {
                if(node===this.tail){
                    break;
                }
                else {
                    node=node.next;
                }
            }
        }
        if(flag){
            return null;
        }
        else {
            return node;
        }
    }

    toArray() {
        var arr=new Array(),i,
            node=this.head;
        if(this.length === 0) {
            return arr=[];
        } else {
            for(i=0; i < this.length; i++) {
                    arr[i]=node.data;
                    node=node.next;
            }
        } return arr;

    }

    removeAt(index) {
        var currentNode = this.head,
            count = 0,
            beforeNodeToDelete = null,
            afterNodeToDelete= null,
            nodeToDelete = null,
            deletedNode = null;
        if(index<0||index>this.length){
            return null;
        }
       if(this.tail===this.head&&index===0){
           deletedNode=this.tail;
           this.tail=null;
           this.head=null;
           this.length=0;
           return deletedNode;
       }

        if (index === 0) {
            this.head = currentNode.next;
            this.head.prev = null;
        } else if (index === this.length-1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            for (count=0; count < index; count++){
                currentNode = currentNode.next;
            }

            beforeNodeToDelete = currentNode.prev;
            nodeToDelete = currentNode;
            afterNodeToDelete = currentNode.next;

            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.prev = beforeNodeToDelete;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }
        this.length--;
        return deletedNode;
    }

    moveToFront(node) {
        if(this.length === 1||this.head===node) {
            return node;
        } else {
            if (this.tail === node) {
                var beforeNode = node.prev;
                node.prev = null;
                node.next = this.heard;
                this.heard = node;
                beforeNode.next = null;
                this.tail = beforeNode;
                return node;
            }
            else {
                var beforeNode = node.prev,
                    afterNode = node.next;
                beforeNode.next = afterNode;
                afterNode.prev = beforeNode;
                node.next = this.head;
                node.prev = null;
                this.head = node;
                return node;
            }
            }
        }



    reorganize(data){
        var node = this.findNode(data);
        if(node === this.head) {
            return true;
        }
        if(this.length === 0) {
            return false;
        }
        if(node !== null) {
            this.moveToFront(node);
            return true;
        } else {
            return false;
        }

    }

    }

    module.exports = {
        SelfOrganizedList,
        Node
    };
