import { ImagesStorage } from '../constants/Figures'

export function getPieceImg(piece){
  return ImagesStorage[piece.name][piece.color]
}
