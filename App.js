import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, Text, View, StyleSheet, Alert, ScrollView } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');   // Guardam o nome de usuário e senha digitados
  const [password, setPassword] = useState('');   // Guardam o nome de usuário e senha digitados
  const [loggedIn, setLoggedIn] = useState(false); // Estado que indica se o usuário está autenticado.
  const [screen, setScreen] = useState('menu'); // Controla qual tela do aplicativo está visível no momento,

  //Objeto que armazena informações relacionadas a uma ação de retirada
  const [withdrawData, setWithdrawData] = useState({
    name: '',
    sector: '',
    date: '',
    email: '',
    number: '',
    material: '',
    quantity: '',
    stockType: 'Normal'
  });


// Verificação de Login e se for bem sucedido vai para o menu
  const handleLogin = () => {
    if (username === 'condeleal' && password === 'conde123') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      setLoggedIn(true);
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setScreen('menu');
  };

  // exemplo para mostrar no estoque
  const items = [
    { id: 1, material: 'Teste', quantity: 10 },
    { id: 2, material: 'Teste', quantity: 3 },
    { id: 3, material: 'Teste', quantity: 7 },
    { id: 4, material: 'Teste', quantity: 21 },
  ];

  const handleWithdrawRequest = () => {
    setScreen('retirada');
  };

  const handleWithdrawSubmit = () => {
    Alert.alert('Sucesso', 'Solicitação de retirada enviada!');
    setScreen('menu');
  };


//  exibe uma tela de login no aplicativo
  if (!loggedIn) {
    return (
      <View style={styles.container}>
        <Image source={require('./log.png')} style={styles.logo} />
        <Text style={styles.title}>Acesse sua Conta</Text>

        <Text style={styles.label}>Usuário:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Creche Conde Modesto Leal</Text>
      </View>
    );
  }


  // aqui mostra a tela de menu depois do login 
  if (screen === 'menu') {
    return (
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>Menu</Text>

        <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('estoque')}>
          <Text style={styles.menuButtonText}>Estoque</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('doacao')}>
          <Text style={styles.menuButtonText}>Doação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Creche Conde Modesto Leal</Text>
      </View>
    );
  }

  // Aqui mostra as tabelas do estoque 

  const renderTable = () => (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Nº</Text>
        <Text style={styles.tableHeaderText}>Material</Text>
        <Text style={styles.tableHeaderText}>Qtde</Text>
      </View>

      <ScrollView style={styles.tableBody}>
        {items.map(item => (
          <View key={item.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.id}</Text>
            <Text style={styles.tableCell}>{item.material}</Text>
            <Text style={styles.tableCell}>{item.quantity}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );


  // Esse trecho exibe a interface das telas de Estoque ou Doação com base no valor da variável screen
  if (screen === 'estoque' || screen === 'doacao') {
    return (
      <View style={styles.estoqueContainer}>
        <Text style={screen === 'estoque' ? styles.estoqueTitle : styles.donationTitle}>
          {screen === 'estoque' ? 'Estoque' : 'Doação'}
        </Text>

        {renderTable()}

        <TouchableOpacity style={styles.requestButton} onPress={handleWithdrawRequest}>
          <Text style={styles.requestButtonText}>Solicitar Retirada</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => setScreen('menu')}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Creche Conde Modesto Leal</Text>
      </View>
    );
  }



  // exibe a interface da tela de Retirada com campos de entrada
  if (screen === 'retirada') {
    return (
      <View style={styles.withdrawContainer}>
        <Text style={styles.withdrawTitle}>Retirada</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={withdrawData.name}
          onChangeText={(text) => setWithdrawData({ ...withdrawData, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Setor"
          value={withdrawData.sector}
          onChangeText={(text) => setWithdrawData({ ...withdrawData, sector: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Data"
          value={withdrawData.date}
          onChangeText={(text) => setWithdrawData({ ...withdrawData, date: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={withdrawData.email}
          onChangeText={(text) => setWithdrawData({ ...withdrawData, email: text })}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Nº"
          value={withdrawData.number}
          onChangeText={(text) => setWithdrawData({ ...withdrawData, number: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Material"
          value={withdrawData.material}
          onChangeText={(text) => setWithdrawData({ ...withdrawData, material: text })}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Quantidade"
            value={withdrawData.quantity}
            onChangeText={(text) => setWithdrawData({ ...withdrawData, quantity: text })}
          />
          <Text style={styles.unitText}>UN</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.stockButton, withdrawData.stockType === 'Normal' && styles.selectedButton]}
            onPress={() => setWithdrawData({ ...withdrawData, stockType: 'Normal' })}
          >
            <Text style={styles.stockButtonText}>Normal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.stockButton, withdrawData.stockType === 'Doação' && styles.selectedButton]}
            onPress={() => setWithdrawData({ ...withdrawData, stockType: 'Doação' })}
          >
            <Text style={styles.stockButtonText}>Doação</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.requestButton} onPress={handleWithdrawSubmit}>
          <Text style={styles.requestButtonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => setScreen('menu')}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D7D7D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footerText: {
    fontSize: 16,
    color: '#000000',
    marginTop: 30,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: '#7D7D7D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  menuTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  menuButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  menuButtonText: {
    color: '#000000',
    fontSize: 18,
  },
  logoutButton: {
    width: '20%',
    height: 40,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  estoqueContainer: {
    flex: 1,
    backgroundColor: '#7D7D7D',
    padding: 20,
    alignItems: 'center',
  },
  estoqueTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  donationContainer: {
    flex: 1,
    backgroundColor: '#7D7D7D',
    padding: 20,
    alignItems: 'center',
  },
  donationTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  tableContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableBody: {
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tableCell: {
    width: '33%',
    textAlign: 'center',
  },
  requestButton: {
    width: '60%',
    height: 45,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  requestButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  backButton: {
    width: '60%',
    height: 45,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  withdrawContainer: {
    flex: 1,
    backgroundColor: '#7D7D7D',
    padding: 20,
    alignItems: 'center',
  },
  withdrawTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  unitText: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 10,
  },
  stockButton: {
    flex: 1,
    height: 45,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
  selectedButton: {
    backgroundColor: '#FFFFFF',
    width: 100,
  },
  stockButtonText: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },

});
