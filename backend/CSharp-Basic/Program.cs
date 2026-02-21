using System;
using System.Collections.Generic;

namespace CSharpBasic
{
    class Program
    {
        static void Main(string[] args)
        {
            // ConsoleColor originalColor = SetupAppearance();
            // GreetUser(originalColor);
            // VariablePractice();
            // ConditionPractice();
            // DiceRollPractice();
            // ArrayPractice();
            // ListPractice();
            
            Wizard wizard1 = new Wizard("Harry Potter", "Expecto Patronum");
            wizard1.CaseSpell();
            wizard1.Meditate();

            Wizard wizard2 = new Wizard("Albus Dumbledore", "Arresto Momentum");
            wizard2.CaseSpell();
            
            Console.WriteLine(Wizard.Count);    
            
            Console.ReadKey();
        }

        static ConsoleColor SetupAppearance()
        {
            // Change the appearance 
            Console.Title = "Skynet";
            ConsoleColor originalColor = Console.ForegroundColor;
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            Console.WindowHeight = 40;
            return originalColor;
        }

        static void GreetUser(ConsoleColor originalColor)
        {
            // Get a conversation going
            Console.WriteLine("Hello, what's your name?");

            string userName = Console.ReadLine();

            Console.ForegroundColor = originalColor;
            Console.WriteLine("Hello " + userName + " nice to meet you!");
        }

        static void VariablePractice()
        {
            // Variable Practice
            double num1;
            double num2;
            Console.Write("Input a number: ");
            num1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Input a second number: ");
            num2 = Convert.ToDouble(Console.ReadLine());

            double result = num1 * num2;
            Console.WriteLine("The result is: " + result);
            Console.WriteLine("Are you sure to continue? Answer yes or no");
        }

        static void ConditionPractice()
        {
            // Condition Practice
            string reply = Console.ReadLine();

            if (reply == "yes")
            {
                Console.WriteLine("Let's keep going!");
            }
            else if (reply == "no")
            {
                Console.WriteLine("Bye Bye!");
                for (int i = 5; i >= 1; i++)
                {
                    Console.WriteLine(i);
                    Console.ReadKey();
                }
            }
            else
            {
                Console.WriteLine("I don't understand that!");
            }
        }

        static void DiceRollPractice()
        {
            // Random Method + while loop practice
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

            Console.WriteLine("It takes " + attempts + " attempts");
        }

        static void ArrayPractice()
        {
            // Array + for loop practice
            string[] anime = { "AoT", "Violet Evergarden", "Your Name" };
            Array.Sort(anime);

            Console.WriteLine("Do you know any of these animes?");
            for (int i = 0; i < anime.Length; i++)
            {
                int rank = i;
                Console.WriteLine(rank + ". " + anime[i]);
            }
        }

        static void ListPractice()
        {
            // List Practice
            List<String> shoppingList = new List<string>();
            shoppingList.Add("Chocolate");
            shoppingList.Add("Cake");
            shoppingList.Add("Cookies");
            shoppingList.Add("BlueBerry");
            shoppingList.Remove("Chocolate");
            shoppingList.RemoveAt(2);

            Console.WriteLine("This is your shopping list:");
            for (int i = 0; i < shoppingList.Count; i++)
            {
                Console.WriteLine(shoppingList[i]);
            }
        }
    }

    class Wizard
    {
        public string name;
        public string favoriteSpell;
        private int spellSlots;
        private float experiences;

        public static int Count;

        public Wizard(string _name, string _favoriteSpell)
        {
            name = _name;
            favoriteSpell = _favoriteSpell;
            spellSlots = 2;
            experiences = 0f;
            Count++;
        }
        
        public void CaseSpell()
        {
            if (spellSlots > 0)
            {
                Console.WriteLine(name + " casts " + favoriteSpell);
                spellSlots--;        
                experiences += 0.3f;
            }
            else
            {
                Console.WriteLine(name + " is out of spell slots.");
            }

        }

        public void Meditate()
        {
            Console.WriteLine(name + "meditate to regain spell slots.");
            spellSlots = 2;
        }
    }
}