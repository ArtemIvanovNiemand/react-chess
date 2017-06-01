import Koa from 'koa';
import IO from 'koa-socket';

import * as Constants from './Constants';
import Board from './Board';

const app = Koa();
const io = new IO();
let board = new Board();

io.attach(app);

io.on('connection', ctx => {
  console.log('[server] new user connected');
});

io.on('MOVE_PIECE', (ctx, data) => {
	let {from, to } = data
	board.movePiece(from, to)
	
  console.log(`[server] piece moved from:${from} to ${to}`);
  io.broadcast('PIECE_WAS_MOVED', board);
});

io.on('SET_BOARD', (ctx, data) => {
  ctx.socket.emit('SET_BOARD', board);
});

app.listen(3000, Constants.HOST, () => {
  console.log('[server] ready');
});
