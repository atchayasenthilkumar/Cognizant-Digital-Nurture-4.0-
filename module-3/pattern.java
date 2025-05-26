public class PatternSwitchExample {
    public static void main(String[] args) {
        testSwitch("Hello");
        testSwitch(123);
        testSwitch(45.67);
        testSwitch(true);
    }

    static void testSwitch(Object obj) {
        String result = switch (obj) {
            case Integer i -> "Integer: " + i;
            case String s -> "String: " + s.toUpperCase();
            case Double d -> "Double: " + d;
            default -> "Unknown type";
        };

        System.out.println(result);
    }
}
