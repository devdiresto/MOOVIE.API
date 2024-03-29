class SinglyLinkedListNode { // LINK DO DESAFIO https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
    int data;
    SinglyLinkedListNode next;

    public SinglyLinkedListNode(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Solution {
    static boolean hasCycle(SinglyLinkedListNode head) {
        if (head == null || head.next == null) {
            return false; 
        }

        SinglyLinkedListNode tortoise = head;
        SinglyLinkedListNode hare = head;

        while (hare != null && hare.next != null) {
            tortoise = tortoise.next;
            hare = hare.next.next;

            if (tortoise == hare) {
                return true; 
        }

        return false; 
    }

   
    public static void main(String[] args) {
        SinglyLinkedListNode node1 = new SinglyLinkedListNode(1);
        SinglyLinkedListNode node2 = new SinglyLinkedListNode(2);
        SinglyLinkedListNode node3 = new SinglyLinkedListNode(3);

        node1.next = node2;
        node2.next = node3;
        node3.next = node1; 

        boolean result = hasCycle(node1);
        System.out.println(result); 
    }
}
