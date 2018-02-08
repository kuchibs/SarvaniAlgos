package google.algos.feb2018.stacks;


public class StackWithLL<T extends Comparable <T>> {
	
	private Node<T> head;
	private int count=0;

	
	public void push (T data){
		if(this.head == null){
			this.head = new Node(data);
			
		}else{
			Node oldNode = this.head;
			this.head = new Node (data);
			this.head.setNextNode(oldNode);
		}
		count ++;
	}
	
	
	public Node pop (){
		
		Node oldHead = this.head;
		this.head = this.head.getNextNode();
		this.count--;
		return oldHead;
		
	}
	
	public int size(){
		return count;
	}
	
	public boolean isEmpty(){
		return this.head==null;
	}
}
