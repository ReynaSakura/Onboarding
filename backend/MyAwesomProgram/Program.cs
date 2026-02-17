using System;

namespace MyAwesomProgram
{
    class Program
    {
        static void Main(string[] args)
        {       
            // Change the appearance 
            Console.Title = "Skynet";
            ConsoleColor originalColor = Console.ForegroundColor;
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            Console.WindowHeight = 40;
            
            
            // Get a conversation going
            Console.WriteLine("Hello, what's your name?");
            
            string userName = Console.ReadLine();
            
            Console.ForegroundColor = originalColor;
            Console.WriteLine("Hello " + userName + " nice to meet you!");

            double num1;
            double num2;
            Console.Write("Input a number: ");
            num1 = Convert.ToDouble(Console.ReadLine());
            
            Console.Write("Input a second number: ");
            num2 = Convert.ToDouble(Console.ReadLine());
             
            double result = num1 * num2;
            Console.WriteLine("The result is: " + result); 
            Console.WriteLine("Are you sure to continue? Answer yes or no");
            
            string reply = Console.ReadLine();
            
            if (reply == "yes")
            {
                Console.WriteLine("Let's keep going!");
            }
            else if (reply == "no"){
                Console.WriteLine("Bye Bye!");
                for (int i=5 ; i >= 1; i++)
                {
                    Console.WriteLine(i);
                    Console.ReadKey();
                }
            }
            else
            {
                Console.WriteLine("I don't understand that!");
            }
            
            Random num = new Random();

            int roll = 0;
            int attempts = 0;
    
            Console.WriteLine("Press Enter to roll the die.");
            while (roll != 6)
            {
                Console.ReadKey();
                
                roll = num.Next(1, 7);
                Console.WriteLine("You got a " + roll);
                attempts++;
            }
            
            Console.WriteLine("It takes " +  attempts + " attempts");
            
            Console.ReadKey();
        }
    }
}