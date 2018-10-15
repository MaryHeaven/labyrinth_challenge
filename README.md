# Лабиринт

> "Таким образом, герой встретил Минотавра в мрачных глубинах Лабиринта и не был напуган". -Тесей и Минотавр

В этой задаче вам нужно будет создать программу, которая определяет, разрешим ли лабиринт или нет. Шаг за шагом, и Вы создадите программу, чтобы:

  * Читать файл, содержащий Лабиринт
  * Представлять лабиринт в коде
  * Использовать стратегию, чтобы определить, разрешим ли Лабиринт

**Требуются тесты**. Эта задача может легко завести в тупик, если вы не будете тщательно тестировать даже самые основные методы. Например, простая ошибка, подобная смешению x и y, может иметь некоторые запутанные и неочевидные последствия. Если Вы не знаете, как проверить что-то, обратитесь за помощью.

## Чтение лабиринта

Ваш лабиринт будет определен в текстовом файле, который выглядит так:

```
o#........
.#####.##.
.......##.
######.#*.
.......###
```
 * `#` означает стену
 * `.` означает открытое пространство
 * `o` означает место старта
 * `*` означает Вашу конечную цель


Вам предоставлен метод, называемый `readMaze`, чтобы вы начали. Он берет файл и возвращает 2D-массив, представляющий лабиринт. См. Файл спецификации для примера того, как это работает.

## Release 1. Сначала – небольшие проблемы

Ваша задача - написать **рекурсивный** алгоритм, который определяет, решаемая ли карта или нет. Ваш метод `isSolvable`, несмотря на то, что он написан, должен выдавать`true`, если финиш (`*`) доступен с самого начала (`o`). Он должен выдавать `false`, если невозможно достичь конца (нет пути). Вам не нужно фактически возвращать путь.

Прежде чем начать, поработайте с вашей парой, чтобы подумать о том, на какие вопросы вам нужно ответить. Вот несколько, чтобы вы начали:

 * Где начальная позиция?
 * Открыта ли конкретная позиция (x, y)? Это стена? Это цель?
 * Если я смотрю на определенную позицию, то каковы ее соседи?
 * Как я могу узнать, какие соседи определенной позиции открыты?

Постарайтесь придумать небольшие вопросы, подобные этим, и напишите ответы на них. Пока не беспокойтесь об изучении или рекурсии. Если вы решите небольшие проблемы, подобные этой, на данном этапе, то решение более сложной проблемы рекурсивного изучения будет в дальнейшем гораздо проще.

Для каждого метода, который вы пишете, напишите тест.

Мы будем использовать методы, которые мы пишем в этом релизе, в следующей задаче.

## Release 2. Изучение

Теперь, когда мы написали методы, которые отвечают на некоторые из наших более мелких вопросов, мы можем их использовать, когда мы пишем наш рекурсивный алгоритм.

Напомним, вот наша задача:

> Задача - написать рекурсивный алгоритм, определяющий, можно ли пройти лабиринт или нет. Ваш метод `isSolvable`, Он должен выдавать` true`, если финиш (`*`) доступен с самого начала (`o`). Он должен выдавать `false`, если невозможно достичь конца (нет пути). Вам не нужно фактически возвращать путь.


Подсказка: ваш рекурсивный алгоритм должен будет исследовать ячейку до тех пор, пока не найдет конец, или не определит, что конец недостижим. Каким образом он будет исследовать ее рекурсивно? Как он узнает, нашел ли он конец? Как он узнает, что цель не может быть достигнута?

Убедитесь, что вы тестируете карты разных типов. Некоторые примеры содержатся в этом репозитории.

## Stretch 1. Итеративный

Придумайте итерационное решение, сравните его с вашим рекурсивным решением. Одинаково ли они работают? Какой вы предпочитаете?

Итеративная версия может, с относительно небольшим изменением, вести себя одним из двух указанных ниже способов:

![](assets/dfs.gif)


![](assets/bfs.gif)

Можете ли вы создать итеративные решения, имитирующие оба способа?

## Stretch 2 Более тяжелые лабиринты и открытая местность

Запустите свой решатель против более сложных карт или более открытой местности. Работает ли он? Если нет, то почему? Что вы должны изменить, чтобы заставить его работать?

```
...#.....#
...#.#.#.#
...#.#.#.#
.#...#.#*#
.#########
........o.
####.#####
..........
.###.####.
...#......
```


```
.................
........#........
........#.*......
........#........
........#........
........#........
........#........
........#........
........#........
.o......#........
........#........
.................
```





___________________________________________________________________________________




# ENG
# Labyrinth

> "So it was that the hero met the Minotaur in the gloomy depths of the Labyrinth and was not afraid." —Theseus and the Minotaur

In this challenge you will need to create a program that determines if a maze is solvable or not. You will build a program step by step to:

 * Read in a file containing the Maze
 * Represent the Maze in code
 * Use a strategy to determine if the Maze is solvable

**Tests are required**. This challenge can easily go awry if you're not careful testing even your most basic methods. For example, a simple bug like mixing up x and y could have some confusing and non-obvious consequences. If you're not sure how to test something, ask for help.

## Reading the Maze

Your maze will be defined in a text file that looks like this:

```
o#........
.#####.##.
.......##.
######.#*.
.......###
```

 * `#` is a wall
 * `.` is an open tile
 * `o` is your start point
 * `*` is your goal

The maze does not "wrap", this isn't Pac-Man!

You have been given a method called `read_maze` to get you started. It takes a file, and returns a 2D array representing the maze. See the spec file for an example of how this works.

## Release 1, Small Problems First

Your task is to write a **recursive** algorithm that determines if a map is solvable or not. Your `is_solvable?` method, however it is written, should return `true` if the finish (`*`) is reachable from the start (`o`). It should return `false` if it is impossible to reach the end (no path exists). You do not need to actually return the path itself.

But this is a big problem! If we're going to make any headway we'll need to break it down. Before you begin, work with your pair to think about what kinds of questions you'll need to answer. Here are a few to get you started:

 * Where is the start position?
 * Is a specific position (x,y) open? Is it a wall? Is it a goal?
 * If I'm looking at a specific position, what are its neighbors?
 * How can I tell which neighbors of a specific position are open?

Try to come up with small questions like these, and write methods that answer them. Don't even worry about exploring or recursing yet. If you solve small pieces of the problem like this now, then solving the bigger problem of recursively exploring will be easier later.

For each method you write, write a test. This is not optional!

We'll use the methods we write in this release in the next one.

## Release 2, Exploring

Now that we've written methods that answer some of our smaller questions, we can use them when we write our recursive algorithm.

To recap, here's our task:

> Your task is to write a recursive algorithm that determines if a map is solvable or not. Your `is_solvable?` method, however it is written, should return `true` if the finish (`*`) is reachable from the start (`o`). It should return `false` if it is impossible to reach the end (no path exists). You do not need to actually return the path itself.


Hint: your recursive algorithm will need to explore a cell at a time until it finds the end, or determines that the end is unreachable. How will it explore recursively? How will it know if it found the end? How will it know if the end can't be reached?

Make sure you test on different kinds of maps. Some examples are contained in this repository.

## Stretch 1, Iterative

Come up with an iterative solution, them compare and contrast it with your recursive solution. Does it work the same? Which do you prefer?

The iterative version can, with a relatively small change, behave in one of two ways:

![](assets/dfs.gif)


![](assets/bfs.gif)

Can you create iterative solutions that mimic both?

## Stretch 2, Harder Mazes & Open Terrain

Run your solver against harder maps or more open terrain. Does it work? If not, why? What did you have to change to get it to work?

```
...#.....#
...#.#.#.#
...#.#.#.#
.#...#.#*#
.#########
........o.
####.#####
..........
.###.####.
...#......
```


```
.................
........#........
........#.*......
........#........
........#........
........#........
........#........
........#........
........#........
.o......#........
........#........
.................
```
