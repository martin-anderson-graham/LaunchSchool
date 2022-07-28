package main

import "fmt"

type DoublyLinkedList struct {
	length int
	head   *Node
	tail   *Node
}

type Node struct {
	data int
	next *Node
	prev *Node
}

func (list *DoublyLinkedList) Enqueue(data int) *Node {
	if list.length == 0 {
		list.head = &Node{data, nil, nil}
		list.tail = list.head
		list.length += 1
		return list.head
	} else {
		node := &Node{data, nil, list.tail}
		list.tail.next = node
		list.tail = node
		list.length += 1
		return node
	}
}

func (list *DoublyLinkedList) Dequeue() (int, bool) {
	if list.head == nil {
		return 0, false
	} else {
		data := list.head.data
		list.length -= 1

		if list.head.next == nil {
			list.head = nil
			list.tail = nil
		} else {
			list.head.next.prev = nil
			list.head = list.head.next
		}
		return data, true
	}
}

func (list *DoublyLinkedList) PrintAll() {
	if list.length > 0 {
		fmt.Print(list.head.data)
		node := list.head
		for i := 0; i < list.length-1; i++ {
			node = node.next
			fmt.Print(" => ", node.data)
		}
		fmt.Println()
	}
}

func (list *DoublyLinkedList) PrintAllReverse() {
	if list.length > 0 {
		fmt.Print(list.tail.data)
		node := list.tail
		for i := 0; i < list.length-1; i++ {
			node = node.prev
			fmt.Print(" => ", node.data)
		}
		fmt.Println()
	}
}

func (list *DoublyLinkedList) Reverse() {
	node := list.head
	for node != nil {
		node.prev, node.next, node = node.next, node.prev, node.next
	}
	list.head, list.tail = list.tail, list.head
}



func main() {
	list := &DoublyLinkedList{}
	list.Enqueue(1)
	list.Enqueue(2)
	list.Enqueue(3)
	list.PrintAll()
	list.Reverse()
	list.PrintAll()

	
}
