public class OperatorPrecedence {
    public static void main(String[] args) {
        int result = 10 + 5 * 2; // * has higher precedence than +
        System.out.println("Result: " + result); // Outputs 20

        int complex = (10 + 5) * 2; // Parentheses change the order
        System.out.println("Complex Result: " + complex); // Outputs 30
    }
}
