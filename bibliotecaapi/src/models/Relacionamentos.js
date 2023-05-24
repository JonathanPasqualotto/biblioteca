import autor from './AutorModel.js';
import editora from './EditoraModel.js';
import emprestimo from './EmprestimoModel.js';
import livroautor from './LivroAutorModel.js';
import livro from './LivroModel.js';
import pessoa from './PessoaModel.js';

//Uma editora pode ter muitos livros vinculados a ela.
editora.hasMany(livro, { foreignKey: 'ideditora' });
//Um livro pertence a uma editora.
livro.belongsTo(editora, { as: 'editora', foreignKey: 'ideditora' });
//Uma pessoa pode ter muitos empréstimos.
pessoa.hasMany(emprestimo, { foreignKey: 'idpessoa' });
//Um empréstimo pertence a uma pessoa.
emprestimo.belongsTo(pessoa, { as: 'pessoa', foreignKey: 'idpessoa' });
//Um livro pode ter vários autores e um autor pode ser escritor de muitos livros.
livroautor.belongsTo(autor, { as: 'autor', foreignKey: 'idautor' });
livroautor.belongsTo(livro, { as: 'livro', foreignKey: 'idlivro' });