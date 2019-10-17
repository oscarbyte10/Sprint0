import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Map data;
  List medidasData;
  void getUsers() async {
    http.Response response = await http.get('http://the0sprint.herokuapp.com/api/medidas');
    data = json.decode(response.body);
    setState(() {
      medidasData = data['medidas'];
    });
  }

  @override
  void initState() {
    super.initState();
    getUsers();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Mobile"),
        backgroundColor: Colors.amber,
      ),
      body: ListView.builder(
        itemCount: medidasData == null ? 0 : medidasData.length,
        itemBuilder: (BuildContext context, int index) {
          return Card(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                children: <Widget>[
                  Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text(
                          "${index+1}",
                          style: TextStyle(
                              fontSize: 20.0,
                              fontWeight: FontWeight.w400
                          )
                      )
                  ),
                  Padding(
                    padding: const EdgeInsets.all(10.0),
                      child: Text("${medidasData[index]["valor"]}" + "%")
                    ,
                  )
                ],
              )
            )
          );
        },
      )
    );
  }
}
