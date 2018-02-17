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
        if(this.length===0){
            return 0;
        }
        return this.length;
    }

    at(index) {
        var node = this.head,
            count=0,
            length = this.length;

        if (length === 0 || index < 0 || index > this.length) {
            return null;
        }

        while (count < index) {
            node = node.next;
            count++;
        }
        return node.data;
    }

    findNode(data) {
        var node = this.head;
        while(data !== node.data) {
            node = node.next;
        }
        if(node !== null) {
            return node;
        }
        return null;
    }

    toArray() {
        var arr,i,
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

       /* if(this.length === 1) {
            return deletedNode;
        }*/

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
        if(this.length === 1) {
            return node;
        }
        this.removeAt(0);

    }

    reorganize(data) {

    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
