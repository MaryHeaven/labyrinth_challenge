solver = require('../solver.js'); 
const readMaze = require('../solver');

describe("Solver", () => {
  describe('read_maze', () => {
    it('should read a maze into a 2D (nested) array', () => {
      let maze = readMaze("./map_test.txt")
      let mazeArray = [['#','.','#'],
                    ['#','.','*'],
                    ['#','#','#']]
      expect(maze).toEqual(mazeArray)
    })
  })
})
