﻿

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using InventoryManagementSystem.Models;

namespace InventoryManagementSystem.DAL
{
    public class Calculations
    {
        /*
        public static IDictionary<Ingredient, int> IngredientsUsedForWeek()
        {
            InventoryContext db = new InventoryContext();
            var _menuItems = db.MenuItems;
            IDictionary<Ingredient, int> _ingredientsUsed = new Dictionary<Ingredient, int>();
            foreach (var item in _menuItems)
            {
                IngredientsForMenuItem(item, _ingredientsUsed);
            }
            return _ingredientsUsed;
        }
        */
        
        //This overload is using a dummy parameter that doesn't get used.
        //We needed an IngredientsUsed... to be used in the view, so it needed
        //to contain the InventoryContext that is not available in view.
        public static IDictionary<Ingredient, int> IngredientsUsedForWeek(string dummy)
        {
            InventoryContext db = new InventoryContext();
            var ingredientOjbects = db.Ingredients;
            IDictionary<Ingredient, int> _ingredientsUsed = new Dictionary<Ingredient, int>();
            foreach (var item in ingredientOjbects)
            {
                _ingredientsUsed.Add(item, (int)item.AmountUsed);
            }
            return _ingredientsUsed;
        }
        //Used for Updated method in weekly controller.  This is used so the usedIngredients are not
        //caluculated from MenuItems_
        public static IDictionary<Ingredient, int> IngredientsUsedForWeek(List<Ingredient> Ingredients)
        {
            IDictionary<Ingredient, int> ingredientsUsed = new Dictionary<Ingredient, int>();
            foreach (var item in Ingredients)
            {
                ingredientsUsed.Add(item, (int)item.AmountUsed);
            }
            return ingredientsUsed;
        }
        /*
        public static IList<double> WeeklyProfit(IDictionary<Ingredient, int> _ingredientsUsed)
        {
            double WeekCost = CostofWeeklyIngredients(_ingredientsUsed);
            double WeekIncome = WeeklyIncome();
            double WeekProfit = WeekIncome - WeekCost;

            IList<double> WeekStats = new List<double> { WeekCost, WeekIncome, WeekProfit };
            return WeekStats;
        }

        private static void IngredientsForMenuItem(MenuItem _menuItem, IDictionary<Ingredient, int> ingredientsUsed)
        {
            if (_menuItem.QuantitySold != null)
            {
                foreach (var ingredient in _menuItem.IngredientList)
                {
                    if (ingredientsUsed.ContainsKey(ingredient))
                    {
                        ingredientsUsed[ingredient] += (int)_menuItem.QuantitySold;
                    }
                    else
                    {
                        ingredientsUsed.Add(ingredient, (int)_menuItem.QuantitySold);
                    }
                }
            }
        }

        private static double CostofWeeklyIngredients(IDictionary<Ingredient, int> _ingredientsUsed)
        {
            InventoryContext db = new InventoryContext();
            double Cost = 0.0;
            foreach (var item in _ingredientsUsed)
            {
                var itemId = item.Key.Id;
                Ingredient _ingredient = db.Ingredients.FirstOrDefault(s => s.Id == itemId);
                Cost += (_ingredient.Cost * item.Value);
            }
            return Cost;
        }

        // --- Place calculations for extra items here ---
        // --- Calculate cost of extra, subtract from weekly cost ---
        // --- Cost of Menu Items = Cost - Cost of Extras ---
        // --- RS 9/1/2017 ---

        // Calculate extras costs here.
        /*
        private static double CostofExtraIngredients(IDictionary<Ingredient, int> _ingredientsUsed)
        {
            InventoryContext db = new InventoryContext();
            double ExtrasCost = 0.0;
            foreach (var item in _ingredientsUsed)
            {
                // set loop to check for first letter "x" in name of ingredient.
                // Not yet implemented.
                
                var itemId = item.Key.Id;
                Ingredient _ingredient = db.Ingredients.FirstOrDefault(s => s.Id == itemId);
                ExtrasCost += (_ingredient.Cost * item.Value);
            }
        }

        // --- End RS Additions 9/1/2017 ---
    

        private static double WeeklyIncome()
        {
            InventoryContext db = new InventoryContext();
            double Income = 0.0;
            var _menuItems = db.MenuItems;
            foreach (var item in _menuItems)
            {
                Income += (item.Price * (double)item.QuantitySold);
            }
            return Income;
        }
        */
    }
}
