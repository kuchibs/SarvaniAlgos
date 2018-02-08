package google.algos.feb2018.stacks;

public class StackWithLL<T extends Comparable<T>>{
	
	
	public Node<T> head;
	public int count=0;
	
	public void push(T data){
		
		Node<T> newNode = new Node(data);
		
		if(head==null){
			this.head = newNode;
		}else{
			Node<T> buf = this.head;
			this.head = newNode;
			this.head.setNextNode(buf);
		}
		count++;
	}
	
	public Node<T> pop(){
		if(this.head==null){
			return null;
		}
		
		Node<T> oldHead = this.head;
		this.head = this.head.getNextNode();
		count --;
		return oldHead;
	}
	
	public int size(){
		return count;
	}
	
}