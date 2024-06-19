---
title: "Variables and Assignment"
teaching: 15
exercises: 15
questions:
- "How can I store data in programs?"
objectives:
- "Write scripts that assign values to variables and perform calculations with those values."
- "Correctly trace value changes in scripts that use assignment."
keypoints:
- "Use variables to store values."
- "Use meaningful variable names."
- "Python is case-sensitive."
- "Use `print()` to display values."
- "Variables must be created before they are used."
- "Variables persist between cells."
- "Variables can be used in calculations."
- "Use an index to get a single character from a string."
- "Use a slice to get a substring."
- "Use the built-in function `len` to find the length of a string."
---
## Use variables to store values

Variables are one of the fundamental building blocks of Python. A variable is like a tiny container where you store values and data, such as filenames, words, numbers, collections of words and numbers, and more.

The variable *name* will point to a value that you “assign” it. You might think about variable assignment like putting a value “into” the variable, as if the variable is a little box 🎁

(In fact, a variable is not a container as such but more like an adress label that points to a container with a given value. This difference will become relevant once we start talking about *lists* and *mutable* data types.)

You assign variables with an equals sign (`=`). In Python, a single equals sign = is the “assignment operator.” (A double equals sign `==` is the “real” equals sign.)

*   Variables are names for values.
*   In Python the `=` symbol assigns the value on the right to the name on the left.
*   The variable is created when a value is assigned to it.
*   Here, Python assigns an age to a variable `age`
    and a name in quotation marks to a variable `first_name`:

~~~
age = 42
first_name = 'Ahmed'
~~~
{: .python}

## Variable names

Variable names can be as long or as short as you want, but there are certain rules you must follow.

Variables:

*   Cannot start with a digit.
*   Cannot contain spaces, quotation marks, or other punctuation.
*   *May* contain an underscore (typically used to separate words in long variable names).
*   Having an underscore at the beginning of a variable name like `_alistairs_real_age` has a special meaning.
    So we won't do that until we understand the convention.
*   The standard naming convention for variable names in Python is the so-called "snake case", 
    where each word is separated by an underscore.\
    For example `my_first_variable`.\
    You can read more about naming conventions in Python [here](https://peps.python.org/pep-0008/#naming-conventions).

### Use meaningful variable names

Python doesn't care what you call variables as long as they obey the rules (alphanumeric characters and the underscore).\
As you start to code, you will almost certainly be tempted to use extremely short variables names like `f`. Your fingers will get tired. Your coffee will wear off. You will see other people using variables like `f`. You’ll promise yourself that you’ll definitely remember what `f` means. But you probably won’t.

So, resist the temptation of bad variable names! Clear and precisely-named variables will:

*   Make your code more readable (both to yourself and others).
*   Reinforce your understanding of Python and what’s happening in the code.
*   Clarify and strengthen your thinking.

~~~
flabadab = 42
ewr_422_yY = 'Ahmed'
print(ewr_422_yY, 'is', flabadab, 'years old')
~~~
{: .python}
<br/>

Use meaningful variable names to help other people understand what the program does.\
The most important "other person" is your future self!

### Python is case-sensitive

Python thinks that upper- and lower-case letters are different, so `Name` and `name` are different variables.
There are conventions for using upper-case letters at the start of variable names so we will use lower-case letters for now.

### Off-Limits Names

The only variable names that are off-limits are names that are reserved by, or built into, the Python programming language itself — such as `print`, `True`, and `list`.  Some of these you can overwrite into variable names (not ideal!), but Jupyter Lab (and many other environments and editors) will catch this by colour coding your variable.  If your would-be variable is colour-coded green, rethink your name choice.  This is not something to worry too much about. You can get the object back by resetting your kernel.

## Use `print()` to display values

We can check to see what’s “inside” variables by running a cell with the variable’s name. This is one of the handiest features of a Jupyter notebook. Outside the Jupyter environment, you would need to use the `print()` function to display the variable.

~~~
first_name
~~~

~~~
Ahmed
~~~

You can run the `print()` function inside the Jupyter environment, too. This is sometimes useful because Jupyter will only display the last variable in a cell, while `print()` can display multiple variables. Additionally, Jupyter will display text with `\n` characters (which means “new line”), while `print()` will display the text appropriately formatted with new lines.

*   Python has a built-in function called `print()` that prints things as text.
*   Provide values to the function (i.e., the things to print) in parentheses.
*   To add a string to the printout, wrap the string in single or double quotations.
*   The values passed to the function are called 'arguments' and are separated by commas.
*   When using the `print()` function, we can also separate with a '+' sign. However, when using '+' we have to add spaces in between manually.

~~~
print(first_name, 'is', age, 'years old')
~~~

~~~
Ahmed is 42 years old
~~~


*   `print()` automatically puts a single space between items to separate them.
*   And wraps around to a new line at the end.

## Variables must be created before they are used

If a variable doesn't exist yet, or if the name has been misspelled, Python reports an error (unlike some languages, which "guess" a default value).

~~~
print(eye_color)
~~~
{: .python}
~~~
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
Cell In[1], line 1
----> 1 print(eye_color)

NameError: name 'eye_color' is not defined
~~~
{: .error}

The last line of an error message is usually the most informative. This message lets us know that there is no variable called eye_color in the script.
<br/><br/>

> ## Variables Persist Between Cells
> Variables defined in one cell exist in all other cells once executed,
> so the relative location of cells in the notebook do not matter
> (i.e., cells lower down can still affect those above).
>
> * Notice the number in the square brackets `[ ]` to the left of the cell.
> * These numbers indicate the order, in which the cells have been executed.
> * Cells with lower numbers will affect cells with higher numbers as Python runs the cells chronologically.
> * As a best practice, we recommend you keep your notebook in chronological order so that it is easier for the human eye to read and make sense of, as well as to avoid any errors if you close and reopen your project, and then rerun what you have done.
>
> Remember: Notebook cells are just a way to organize a program!\
> As far as Python is concerned, all of the source code is one long set of instructions.
{: .callout}

## Variables can be used in calculations

*   We can use variables in calculations just as if they were values.\
    Remember, we assigned 42 to `age` a few lines ago.

~~~
age = age + 3
print('Age in three years:', age)
~~~
{: .python}
~~~
Age in three years: 45
~~~
{: .output}

This code works in the following way.  We are reassigning the value of the variable `age` by taking its previous value (42) and adding 3, thus getting our new value of 45.

## Use an index to get a single character from a string

*   The characters (individual letters, numbers, and so on) in a string are
    ordered. For example, the string 'AB' is not the same as 'BA'. Because of
    this ordering, we can treat the string as a list of characters.
*   Each position in the string (first, second, etc.) is given a number. This
    number is called an index or sometimes a subscript.
*   Indices are numbered from 0 rather than 1.
*   Use the position's index in square brackets to get the character at that
    position.

~~~
element = 'helium'
print(element[0])
~~~
{: .python}
~~~
h
~~~
{: .output}

## Use a slice to get a substring

A part of a string is called a substring. A substring can be as short as a single character. A slice is a part of a string (or, more generally, any list-like thing). We take a slice by using `[start:stop]`, where `start` is replaced with the index of the first element we want and `stop` is replaced with the index of the element just after the last element we want. Mathematically, you might say that a slice selects `[start:stop]`. The difference between stop and start is the slice's length. Taking a slice does not change the contents of the original string. Instead, the slice is a copy of part of the original string.

~~~
element = 'sodium'
print(element[0:3])
~~~
{: .python}
~~~
sod
~~~
{: .output}

## Use the built-in function `len()` to find the length of a string

The built-in function `len()` is used to find the length of a string (and later, of other data types, too).
~~~
element = 'helium'
print(len(element))
~~~
{: .python}
~~~
6
~~~
{: .output}

Note that the result is 6 and not 7. This is because it is the length of the *value* of the variable (i.e. `'helium'`) that is being counted and not the *name* of the variable (i.e. `element`)

Also note that nested functions are evaluated from the inside out, just like in mathematics. Thus, Python first reads the `len()` function, then the `print()` function.

## Exercises

> ## Choosing a Name
>
> Which is a better variable name, `m`, `min`, or `minutes`?
> Why?
> Hint: think about which code you would rather inherit
> from someone who is leaving the library:
>
> 1. `ts = m * 60 + s`
> 2. `tot_sec = min * 60 + sec`
> 3. `total_seconds = minutes * 60 + seconds`
>
> > ## Solution
> >
> > `minutes` is better because `min` might mean something like "minimum"
> > (and actually does in Python, but we haven't seen that yet).
> {: .solution}
{: .challenge}


> ## Swapping Values
>
> Draw a table showing the values of the variables in this program
> after each statement is executed.
> In simple terms, what do the last three lines of this program do?
>
> ~~~
> x = 1.0
> y = 3.0
> swap = x
> x = y
> y = swap
> ~~~
> {: .python}
> > ## Solution
> >
> > ~~~
> > swap = x  #  x->1.0 y->3.0 swap->1.0
> > x = y     #  x->3.0 y->3.0 swap->1.0
> > y = swap  #  x->3.0 y->1.0 swap->1.0
> > ~~~
> > These three lines exchange the values in `x` and `y` using the `swap`
> > variable for temporary storage. This is a fairly common programming idiom.
>{: .solution}
{: .challenge}

> ## Predicting Values
>
> What is the final value of `position` in the program below?
> (Try to predict the value without running the program,
> then check your prediction.)
>
> ~~~
> initial = "left"
> position = initial
> initial = "right"
> ~~~
> {: .python}
> > ## Solution
> >
> > ~~~
> > initial = "left"  # Initial is assigned the string "left"
> > position = initial  # Position is assigned the variable initial, currently "left"
> > initial = "right"  # Initial is assigned the string "right"
> > print(position)
> > ~~~
> > {: .python}
> > ~~~
> > left
> > ~~~
> > {: .output}
> > The last assignment to position was "left"
>{: .solution}
{: .challenge}

> ## Can you slice integers?
>
> If you assign `a = 123`,
> what happens if you try to get the second digit of `a`?
>
> > ## Solution
> > Numbers are not stored in the written representation,
> > so they can't be treated like strings.
> >
> > ~~~
> > a = 123
> > print(a[1])
> > ~~~
> > {: .python}
> > ~~~
> > TypeError: 'int' object is not subscriptable
> > ~~~
> > {: .error}
> {: .solution}
{: .challenge}

> ## Slicing
>
> What does the following program print?
>
> ~~~
> library_name = 'social sciences'
> print('library_name[1:3] is:', library_name[1:3])
> ~~~
> {: .python}
>
> If `thing` is a variable name, `low` is a low number, and `high` is a high number:
> 
> 1.  What does `thing[low:high]` do?
> 2.  What does `thing[low:]` (without a value after the colon) do?
> 3.  What does `thing[:high]` (without a value before the colon) do?
> 4.  What does `thing[:]` (just a colon) do?
> 5.  What does `thing[number:negative-number]` do?
>
> > ## Solution
> > ~~~
> > library_name[1:3] is: oc
> > ~~~
> > {: .output}
> > 1.  It will slice the string, starting at the `low` index and ending an element before the `high` index
> > 2.  It will slice the string, starting at the `low` index and stopping at the end of the string
> > 3.  It will slice the string, starting at the beginning on the string, and ending an element before the `high` index
> > 4.  It will print the entire string
> > 5.  It will slice the string, starting the `number` index, and ending a distance of the absolute value of `negative-number` elements from the end of the string
> {: .solution}
{: .challenge}
