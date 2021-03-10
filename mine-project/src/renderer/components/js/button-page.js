var mx = [1, 0, -1, 0]
var my = [0, 1, 0, -1]
export default {
  name: 'buttonpage',
  data () {
    return {
      title: 'buttonpage',
      single_counter: 0,
      comp_counter: 0,
      bomb_btn: 0,
      group_btn: [0, 0, 0],
      mine_group: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    }
  },
  created () {
    // make bomb in group btn
    var rand = Math.floor(Math.random() * 3)
    this.group_btn[rand] = -1
    this.bomb_btn = rand
    // make bomb in 3*3 mine
    // rand 개 만큼의 bomb 생성
    for (var i = 0; i < rand + 1; i++) {
      var bx = Math.floor(Math.random() * 3)
      var by = Math.floor(Math.random() * 3)
      this.mine_group[bx][by] = -1
    }
  },
  methods: {
    say: function (msg) {
      alert(msg)
    },
    count_click: function () {
      this.single_counter += 1
    },
    event_comp: function () {
      this.comp_counter += 1
    },
    isBomb: function (num) {
      if (num === -1) {
        alert('BOMB!')
      }
    },
    where_is_mine: function (x, y) {
      if (this.mine_group[x][y] < 0) return -1
      var cnt = 0
      for (var i = 0; i < 4; i++) {
        var nx = x + mx[i]
        var ny = y + my[i]
        if (nx < 0 || nx >= 3 || ny < 0 || ny >= 3) continue
        if (this.mine_group[nx][ny] === -1) cnt++
      }
      return cnt
    },
    is_mine: function (x, y, event) {
      var cnt = this.where_is_mine(x, y)
      if (cnt < 0) { // 지뢰 밟음
        alert('BOMB!')
        var btns = document.getElementsByClassName('btn btn-info')
        // 게임 종료
        for (var i = 0; i < btns.length; i++) {
          btns[i].setAttribute('class', 'btn btn-info disabled')
        }
      } else {
        event.target.innerText = cnt
      }
    },
    print_pos: function (x, y) {
      alert(x + ' ' + y + ' ' + this.mine_group[x][y])
    }
  },
  computed: {
    double_counter: function (event) {
      return this.comp_counter * 2
    }
  }
}
