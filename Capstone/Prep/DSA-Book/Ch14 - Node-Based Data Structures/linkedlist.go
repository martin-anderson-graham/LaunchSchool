package main

import "fmt"

type LinkedList struct {
	head   *Node
	length int
}

type Node struct {
	data int
	next *Node
}

func (list *LinkedList) Push(data int) *Node {
	newNodeRef := &Node{data, list.head}
	list.head = newNodeRef
	list.length += 1
	return newNodeRef
}

func (list *LinkedList) Pop() (int, bool) {
	if list.length == 0 {
		return 0, false
	}
	node := list.head
	list.head = node.next
	list.length -= 1
	return node.data, true
}

func (list *LinkedList) Read(index int) int {
	node := list.head
	for i := 0; i < index; i++ {
		node = node.next
	}
	return node.data
}

func (list *LinkedList) Search(num int) (int, bool) {
	if list.length == 0 {
		return 0, false
	}
	node := list.head
	for i := 0; i < list.length; i++ {
		if node.data == num {
			return i, true
		}
		node = node.next
	}
	return 0, false
}

func (list *LinkedList) Insert(index, data int) {
	if index > list.length {
		index = list.length
	}
	node := list.head
	var prior *Node
	for i := 0; i < index; i++ {
		prior = node
		node = node.next
	}
	prior.next = &Node{data, node}
	list.length += 1
}

func (list *LinkedList) Delete(index int) (int, bool) {
	if index >= list.length {
		return 0, false
	}

	if index == 0 {
		data := list.head.data
		list.head = list.head.next
		list.length -= 1
		return data, true
	}

	node := list.head
	for i := 1; i < index; i++ {
		node = node.next
	}
	data := node.next.data
	node.next = node.next.next
	list.length -= 1
	return data, true
}

func (list *LinkedList) PrintAll() {
	node := list.head
	for node.next != nil {
		fmt.Print(node.data, " -> ")
		node = node.next
	}
	fmt.Print(node.data)
	fmt.Println("")
}

func (list *LinkedList) LastElement() (int, bool) {
	if list.head == nil {
		return 0, false
	} else {
		node := list.head
		for node.next != nil {
			node = node.next
		}
		return node.data, true
	}
}

func (node *Node) RemoveNode() {
	*node = *node.next
}

func main() {
	list := &LinkedList{}
	list.Push(1)
	list.Push(2)
	list.Push(3)
	list.Insert(3, 4)
	list.PrintAll()

	list.head.next.RemoveNode()
	list.PrintAll()
}
