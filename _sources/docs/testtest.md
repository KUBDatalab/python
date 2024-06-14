# Installing (or upgrading) Pandas Z

This command installs the pandas library using pip, Python's package installer.\
If you haven't installed pandas before, this will download and install the latest version of pandas along with its dependencies.

`pip install pandas`

Adding the `--upgrade` flag not only installs pandas if it isn't already installed but also ensures that if pandas is already installed, it is updated to the latest version. This is useful to make sure you have the newest features and bug fixes.

`pip install --upgrade pandas`

# Import Pandas


```python
# This line imports the pandas library and aliases it as 'pd'.
# Aliasing pandas as 'pd' is a widely adopted convention that simplifies the syntax for accessing its functionalities.
# After this statement, you can use 'pd' to access all the functionalities provided by the pandas library.

import pandas as pd
```

# Representation of a Pandas `DataFrame`

![Representation of a Pandas DataFrame](images/01_table_dataframe.svg)

# Creating our first `DataFrame`


```python
# These lists will be used as columns for a DataFrame, 
# with each list representing a column and each element within the list representing a row in that column.

name = ["Braund", "Allen", "Bonnel"]
age = [22, 35, 58]
sex = ["male", "male", "female"]
```


```python
# Create a DataFrame named 'df'.
# We use lists 'name', 'age', and 'sex' to fill in the columns.
# Each list corresponds to a column in the DataFrame.
# 'Name', 'Age', and 'Sex' are the titles of these columns.

df = pd.DataFrame({'Name': name, 'Age': age, 'Sex': sex})
```

### Creating a `DataFrame` in pandas is similar to creating a `dictionary`.
The `key`s in the `dictionary` become the column names, while the `value`s, which are `list`s or `array`s, form the columns' data. \
For more information on `dictionary`s in Python, see: \
[https://www.geeksforgeeks.org/python-dictionary/](https://www.geeksforgeeks.org/python-dictionary/)


```python
# Display the DataFrame 'df'.

df
```

### In spreadsheet software, the table representation of our data would look very similar

![Table representaion in spreadsheet software](images/01_table_spreadsheet.png)


```python
# Check the type of the 'df' object using the type()type()' function.

type(df)
```

## Attributes


```python
# Use the 'shape' attribute to determine the dimensions of the DataFrame 'df'.
# It returns a tuple representing the number of rows and columns (rows, columns).

df.shape
```


```python
# Use the 'dtypes' attribute to view the data types of each column in the 'df' DataFrame.
# This command provides information about the data type of each column, such as integer, float, or object (string).

df.dtypes
```

When asking for the `shape` or `dtypes`, no parentheses `()` are used. Both are an attribute of `DataFrame` and `Series`. (`Series` will be explained later.)

Attributes of a `DataFrame` or `Series` do not need `()`.

Attributes represent a characteristic of a `DataFrame`/`Series`, whereas methods (which require parentheses `()`) do something with the `DataFrame`/`Series`. 

### We can transpose a `DataFrame`


```python
# Transpose the DataFrame 'df' using the 'transpose()' method.
# This operation swaps the DataFrame's rows and columns, creating 'df_transposed'.
# Transposing is useful for reshaping data, making it easier to compare rows or apply certain operations that are typically column-based.

df_transposed = df.transpose()
```


```python
# Display the DataFrame 'df_transposed'.

df_transposed
```

### It is also possible to rename columns afterwards


```python
# Rename the columns of the DataFrame 'df'.
# This is done by assigning a new list of column names to 'df.columns'.
# The new column names are 'Names', 'Age', and 'Sex', in that order.

df.columns = ['Names', 'Age', 'Sex']
```


```python
# Rename the 'Age' column to 'Ages' in the DataFrame 'df'.
# This method is useful for selectively renaming only one or more columns without changing the entire set of column names.

df = df.rename(columns={'Age': 'Ages'})
```


```python
# Our DataFrame now looks like this:

df
```

# Each column in a `DataFrame` is a `Series`

![DataFrame Series](images/01_table_series.svg)


```python
# Access the 'Ages' column from the DataFrame 'df'.
# This returns a Series object containing all the data in the 'Ages' column.

df['Ages']
```


```python
# Check the type of the 'Ages' column in 'df' using the 'type()' function.

type(df['Ages'])
```

### We can also create our own `Series`


```python
# Create a pandas Series named 'fare' with specified values.
# The 'name' parameter assigns the name 'Fare' to the Series.

fare = pd.Series([7.2500, 71.2833, 7.9250], name='Fare')
```


```python
# Display the 'fare' Series.
# This outputs the values along with their index positions and the name of the Series.

fare
```


```python
# Check the data type of 'fare' using the 'type()' function.

type(fare)
```

# Appending a `Series` to an existing `DataFrame`


```python
# Concatenate the 'fare' Series to the 'df' DataFrame along the columns (axis=1).
# This adds the 'fare' Series as a new column to 'df', extending it horizontally.
# The name of the 'fare' Series ('Fare') becomes the column name in the updated DataFrame.

df = pd.concat([df, fare], axis=1)
```


```python
# Display the updated DataFrame 'df'.

df
```

### We can also create a new column based on the data in an existing column


```python
# Create a new column 'Age_in_3_years' in the DataFrame 'df'.
# This column is calculated by adding 3 to each value in the 'Ages' column.

df['Age_in_3_years'] = df['Ages'] + 3
```


```python
# Display the updated DataFrame 'df'.

df
```

# Exercise:
* Create a new column called 'Fare_in_DKK' based on the column 'Fare'.
* We assume the old fare prices to be in GBP and the exchange rate to be £1 = 8.7 DKK

<details>
  <summary>Click to reveal solution</summary>
  <br/>
    
`df['Fare_in_DKK'] = df['Fare'] * 8.7`

This solution creates a new column in the `DataFrame` named 'Fare_in_DKK', which contains the fare prices converted from GBP to DKK using the given exchange rate.<br/>
Each fare value in GBP is multiplied by the exchange rate to obtain the corresponding fare value in DKK.

</details>

# REMEMBER

* Import the package, aka `import pandas as pd`.

* A table of data is stored as a pandas `DataFrame`.

* The `shape`and `dtypes` attributes are convenient for a first check.

* Each column in a `DataFrame` is a `Series`.

* We can append `Series` as columns to an existing `DataFrame`.
