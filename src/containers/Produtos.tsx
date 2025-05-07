import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'
import { RootState } from '../store'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {

  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={adicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
      <p>Total de itens no carrinho: {items.length}</p>
    </>
  )
}

export default ProdutosComponent
