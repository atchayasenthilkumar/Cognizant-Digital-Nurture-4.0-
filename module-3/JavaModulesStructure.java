// 34. Java Modules Structure
// File: com.utils/module-info.java
module com.utils {
    exports com.utils;
}

// File: com.utils/com/utils/Utils.java
package com.utils;
public class Utils {
    public static String greet(String name) {
        return "Hello, " + name;
    }
}

// File: com.greetings/module-info.java
module com.greetings {
    requires com.utils;
}

// File: com.greetings/com/greetings/Main.java
package com.greetings;
import com.utils.Utils;
public class Main {
    public static void main(String[] args) {
        System.out.println(Utils.greet("World"));
    }
}
