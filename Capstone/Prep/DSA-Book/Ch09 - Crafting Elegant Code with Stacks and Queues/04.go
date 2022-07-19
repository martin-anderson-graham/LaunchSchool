package main

import "fmt"

type Node struct {
	data rune
	next *Node
}
type Stack struct {
	length int
	head   *Node
}

func makeStack() *Stack {
	return &Stack{
		length: 0,
		head:   nil,
	}
}

func (stack *Stack) Push(str rune) {
	stack.length += 1
	stack.head = &Node{
		data: str,
		next: stack.head,
	}
}

func (stack *Stack) Pop() rune {
	if stack.length == 0 {
		return '_'
	} else {
		stack.length -= 1
		data := stack.head.data
		stack.head = stack.head.next
		return data
	}
}

func stackReverse(str string) string {
	s := makeStack()
	for _, r := range str {
		s.Push(r)
	}
	result := ""
	for s.length > 0 {
		result += string(s.Pop())
	}
	return result
}

func main() {
	str := "abcde"
	fmt.Println(stackReverse(str))
}
