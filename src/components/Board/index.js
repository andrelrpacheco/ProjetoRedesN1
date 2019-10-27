// Cria um componente
import React from 'react';
import { loadLists } from '../../services/api';
import List from '../List';
import { Container } from './styles';

const lists = loadLists();

export default function Board() {
  //const [lists, setLists] = useState(data)
  return (
    <Container>
      {lists.map(list => <List Key={list.title} data={list} />)}
    </Container>
  )
}
