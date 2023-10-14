import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class ShuffleArray {
    public static void main(String[] args) {
        // Create a Scanner to read user input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for the array size
        System.out.print("Enter the number of elements in the array: ");
        int size = scanner.nextInt();

        // Create a list to store the user's input
        List<Integer> myList = new ArrayList<>();

        // Prompt the user to enter each element of the array
        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            int element = scanner.nextInt();
            myList.add(element);
        }

        // Close the scanner
        scanner.close();

        // Shuffle the array
        Collections.shuffle(myList);

        // Print the shuffled array
        System.out.print("Shuffled array: ");
        for (Integer number : myList) {
            System.out.print(number + " ");
        }
    }
}
