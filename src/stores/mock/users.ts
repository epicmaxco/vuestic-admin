import { repeatArray } from '../../services/utils';
import { User } from './../../pages/users/types';

export default repeatArray(50, [
  {
    fullname: 'Patrik Radkow',
    email: 'magicpan@example.gg',
    username: 'magicpan',
    role: 'user',
    projects: 3,
    avatar: '',
  },
  {
    fullname: 'Martin Hoff',
    email: 'niceadmin@mail.com',
    username: 'admin',
    role: 'admin',
    projects: 5,
    avatar: '😍',
  },
  {
    fullname: 'Liz Macintosh',
    email: 'ebrown@gmail.com',
    username: 'ebrown',
    role: 'user',
    projects: 2,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    fullname: 'M2',
    email: 'mrm@gmail.com',
    username: 'mrm',
    role: 'owner',
    projects: 1,
    avatar: ''
  },
  {
    fullname: 'Kevin Smith',
    email: 'kevin@gmail.com',
    username: 'kevin13',
    role: 'user',
    projects: 13,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    fullname: 'Martin Hoff',
    email: 'martin@gmail.com',
    username: 'martin3',
    role: 'user',
    projects: 2,
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    fullname: 'John Doe',
    email: 'john@mail.com',
    username: 'john',
    role: 'user',
    projects: 1,
    avatar: ''
  },
  {
    fullname: 'Maksim Nedo',
    email: 'maksim@epic.com',
    username: 'maksim',
    role: 'admin',
    projects: 1,
    avatar: 'https://avatars.githubusercontent.com/u/23530004?v=4'
  },
  {
    fullname: 'Dmitry Kuzmenko',
    email: 'dd@pp.com',
    username: 'dd',
    role: 'user',
    projects: 1,
    avatar: ''
  },
  {
    fullname: 'Rayan Gosling',
    email: 'rayan@u.ua',
    username: 'rayan',
    role: 'user',
    projects: 1,
    avatar: ''
  }
]) satisfies User[]
