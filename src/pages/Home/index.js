import { Image } from 'expo-image';
import { StyleSheet, View , Text} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                <Image
                    style={styles.photo}
                    source="https://th.bing.com/th/id/OIG.R.0Fa7ioJbyedFzwaeIi?w=1024&h=1024&rs=1&pid=ImgDetMain"
                />
            </View>
            <View style={styles.saldoContainer}>
                <Text style={styles.saldoText}>Saldo: R$ 1.234,35</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    photo: {
        width: 50,
        height: 50,
        margin: 10,
    },
    saldoContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saldoText: {
        fontSize: 24,
    },
});