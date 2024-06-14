# How to read and write tabular data

![How to read and write tabular data](images/02_io_readwrite.svg)

# Import Pandas


```python
# This line imports the pandas library and aliases it as 'pd'.
# Aliasing pandas as 'pd' is a widely adopted convention that simplifies the syntax for accessing its functionalities.
# After this statement, you can use 'pd' to access all the functionalities provided by the pandas library.

import pandas as pd
```

# Finding our current working directory


```python
# The %pwd command is known as a "magic command" in Jupyter Notebook.
# (You can read more about magic commands here: https://www.geeksforgeeks.org/useful-ipython-magic-commands/)
# It is used to display the current working directory (cwd) within the notebook environment.
# This is the folder where the Jupyter Notebook is running.
# Understanding the current working directory is important for file operations like reading and writing files.

%pwd
```

# Creating a `DataFrame` from a csv file


```python
# Load the Titanic dataset from a CSV file into a DataFrame named 'titanic'.
# The 'pd.read_csv()' function is used to read the data from the file 'data/titanic.csv'.
# The file is located in the 'data' directory, relative to the current working directory.
# The resulting DataFrame 'titanic' contains the dataset, ready for analysis and manipulation.

titanic = pd.read_csv('data/titanic.csv')
```


```python
# Display the DataFrame 'titanic'.
# Note, even though we only see the first and last five rows, we actually read the whole DataFrame into the kernel's memory.
# The pressure on memory usage can be alleviated by using the 'head()' method described below.
# However, this will only be an issue with very large datasets, so don't worry too much about it for now.
# You can find out how much memory a DataFrame uses by using the 'memory_usage()' method:
# titanic.memory_usage(deep=True).sum()

titanic
```


```python
# Use the 'shape' attribute to determine the dimensions of the DataFrame 'titanic'.
# It returns a tuple representing the number of rows and columns (rows, columns).

titanic.shape
```


```python
# Display the first few rows of the 'titanic' DataFrame using the 'head()' method.
# This provides a quick overview of the dataset, showing the column names and the first few rows of data.

titanic.head()
```


```python
# Display the last three rows of the 'titanic' DataFrame using the 'tail()' method and specifying 3 as argument.
# This allows us to inspect the end of the dataset, showing the last few rows of data.

titanic.tail(3)
```


```python
# Display the first 80 rows of the 'titanic' DataFrame using the 'head()' method.

titanic.head(80)
```

### Note on `head()` and `tail()`

By default, Pandas limits the display of rows in a `DataFrame` to a maximum of 60 rows.\
Calling a number higher than 60 will display the first five rows followed by an ellipsis (`...`), indicating that rows are being skipped, and then display the last five rows of the `DataFrame`.\
To display all rows without truncation, you can set the `max_rows` option to `None` using `pd.set_option()`:\
`pd.set_option('display.max_rows', None)`

Likewise, Pandas limits the display of columns in a `DataFrame` to a maximum of 20 columns.\
To display all columns without truncation, you can set the `max_columns` option to `None` using `pd.set_option()`:\
`pd.set_option('display.max_columns', None)`


```python
# Use the 'dtypes' attribute to view the data types of each column in the 'titanic' DataFrame.
# This command provides information about the data type of each column, such as integer, float, or object (string).

titanic.dtypes
```


```python
# Use the 'info()' method to display a concise summary of the 'titanic' DataFrame.
# This command provides essential information about the DataFrame, including the number of non-null values in each column,
# the data type of each column, and memory usage.

titanic.info()
```

## The `notna()` conditional function returns a `True` for each row where the values are not a `Null` value


```python
# Use the 'notna()' method to create a boolean DataFrame indicating whether each element in 'titanic' is not null.
# This command returns a DataFrame of the same shape as 'titanic',
# where True indicates a non-null value (i.e., not NaN), and False indicates a null value.

titanic.notna()
```


```python
# Use the 'notna()' method followed by 'sum()' to count the non-null values in each column of the 'titanic' DataFrame.
# This command calculates the sum of True values (non-null) along each column axis, providing a count of non-null values for each column.

titanic.notna().sum()
```

## The `isna()` conditional function returns a `True` for each row where the values are a `Null` value


```python
# Use the 'isna()' method to create a boolean DataFrame indicating whether each element in 'titanic' is null.
# This command returns a DataFrame of the same shape as 'titanic', where True indicates a null value,
# and False indicates a non-null value.

titanic.isna()
```


```python
# Use the 'isna()' method followed by 'sum()' to count the null values in each column of the 'titanic' DataFrame.
# This command calculates the sum of True values (null) along each column axis, providing a count of null values for each column.

titanic.isna().sum()
```


```python
# Filter the 'titanic' DataFrame to select rows where the 'PassengerId' column equals 666.
# This command returns a subset of the DataFrame containing only the rows where the 'PassengerId' column has a value of 666.

titanic[titanic['PassengerId'] == 666]
```

# Exercise:
* Extract the two passengers whose point of departure ('Embarked') is unknown (`NaN`)

<details>
  <summary>Click to reveal solution</summary>
  <br/>
    
`titanic[titanic['Embarked'].isna()]`

This solution uses boolean indexing to filter the `DataFrame` 'titanic', extracting only the rows where the 'Embarked' column contains missing values (`NaN`).\
This approach allows us to identify the passengers whose point of departure is unknown.
    
</details>

# Converting a DataFrame to an Excel file


```python
# Write the DataFrame 'titanic' to an Excel file named 'titanic.xlsx'.
# The 'to_excel()' method is used to save the DataFrame to an Excel file.
# The parameter 'index=False' specifies that we do not want to include the row index in the Excel file.

titanic.to_excel('titanic.xlsx', index=False)
```


```python
# Read data from an Excel file named 'titanic.xlsx' into a DataFrame using the 'read_excel()' function from pandas.
# Note, that we are only reading the data, not storing it in a variable.

pd.read_excel('titanic.xlsx')
```

# REMEMBER

* Getting data in to pandas from many different file formats or data sources is supported by `read_*` functions.

* The `head()`, `tail()`, and `info()` methods are convenient for a first check.

* The `notna()` and `isna()` methods are useful for finding and isolating missing data.

* Exporting data out of pandas is provided by different `to_*` methods.
