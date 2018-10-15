solver = require('../solver')

describe("Solver", () => {
  describe('read_maze', () => {
    it('should read a maze into a 2D (nested) array', () => {
      maze = readMaze("./map_test.txt")
      maze_array = [['#','.','#'],
                    ['#','.','*'],
                    ['#','#','#']]
      expect(maze).toEqual(mazeArray)
    }
  }
}
