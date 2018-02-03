package google.algos.feb2018;

public class GCD {
	
	public static void main(String[] args){
		System.out.println(getGCD(3, 0));;
	}
	
	public static int getGCD(int n, int m){
		
		if (n<0 || m<0 || n==0 ||m==0){
			return 0;
		}
		
		int greater=n; 
		int smaller=m;
		
		if(m>n){
			greater = m; 
			smaller=n;
				
		}
		
		int buff =0; 
		
		if ( (greater % smaller) == 0){
			return smaller; 
		}else {
			buff = smaller;
			smaller = greater % smaller; 
			greater = buff;
			return getGCD(greater, smaller);
		}
		
	}

}
