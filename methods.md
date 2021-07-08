# JS Method Work

Give a short description of what the method does, how it works, its time complexity (if appropriate), and give three examples of it in action!

## String Methods

### charAt(index)

#### Description

Returns a string consisting of the character at the specified index in a string.

#### Parameters

`index (int)`
An integer of the desired index. If omitted or cannot be converted, defaults to 0. If the index is out of range, an empty string is returned.

#### Time Complexity

`O(1)`

#### Examples

```
"hello".charAt(1) => "e"
"whats up".charAt(6) => " "
"hi".charAt(55) => ""
```

### charCodeAt

#### Description

This method returns an `int` between 0 and 65535 representing the UTF-16 code unit at the given index.

#### Parameters

`index (int)`

An integer greater than or equal to 0 and less than the length of the string. If index is not a number, it defaults to 0.

#### Time Complexity

`O(1)`

#### Examples

```
"HELLO".charCodeAt(3) => 76
"1234".charCodeAt(1) => 50
"hi!".charCodeAt(2) => 33
```

### includes(str)

#### Description

Performs a case-sensitive search to determine whether one string contains another string. Returns `true` or `false`

#### Parameters

- `str (string)`: A string to be searched for.
- `pos (int)`: The position within the string at which to begin searching for `str`. (Defaults to 0.)

#### Time Complexity

- `O(n)`

#### Examples

```
"hello".includes("he") => true
"Hello".includes("he") => false
"hiii".includes("hi",1) => false

```

### indexOf(str, fromIndex)

#### Description

The `indexOf()` method returns the index of the first occurrence of the specified value, starting the search at fromIndex. Returns `-1` if the value is not found. Case-sensitive.

#### Parameters

- `str (string)`: The string value to search for. If no string is explicitly provided, searchValue will be coerced to `undefined`, and this value will be searched for.
- `fromIndex (int)`: An integer representing the index at which to start the search. Defaults to 0. For `fromIndex` values lower than `0`, or greater than `searchedStr.length`, the search starts at index `0` and `searchedStr.length`, respectively.

#### Time Complexity

- `O(n)`

#### Examples

```
'Blue Whale'.indexOf('Blue') => 0
'Blue Whale'.indexOf('blue') => -1
'hello world'.indexOf('o', -5) => 4
```

### match(regex)

#### Description

The `match()` method retrieves the result of matching a string against a regular expression.

Returns an `Array` whose contents depend on the presence or absence of the global (g) flag, or `null` if no matches are found.

If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.

if the g flag is not used, only the first complete match and its related capturing groups are returned.

#### Parameters

- `regex (regex)`: A regular expression object.
  If `regex` is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(regex).

#### Time Complexity

- `O(n)`

#### Examples

```
let str = "The rain in SPAIN stays mainly in the plain";
str.match(/ain/g) => [ain, ain, ain]
```

repeat
replace
search
slice
split
substr
toLowerCase
toUpperCase
trim

## Array Methods

map
reduce
filter
forEach
sort
slice
pop
shift
push
unshift
includes
indexOf
every
