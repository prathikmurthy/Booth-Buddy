import 'package:booth_buddy/screens/child_widget.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  PageController _pageController = PageController(
    initialPage: 0,
  );
  int currentIndex = 0;

  Widget childWidget = ChildWidget(
    number: AvailableNumber.First,
  );

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Color.fromARGB(255, 135, 135, 135),
        unselectedItemColor: Color.fromARGB(255, 182, 181, 181),
        currentIndex: currentIndex,
        onTap: (value) {
          currentIndex = value;
          _pageController.animateToPage(
            value,
            duration: Duration(milliseconds: 200),
            curve: Curves.linear,
          );

          setState(() {});
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(
              Icons.qr_code_scanner,
            ),
            //title: Text("First"),
            label: "QR Scanner",

            //change color of label
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.history),
            //title: Text("Second"),
            label: "Visited",
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.person),
              //title: Text("Third"),
              label: "Profile"),
          // BottomNavigationBarItem(
          //   icon: Icon(Icons.dashboard),
          //   //title: Text("Third"),
          //   label: "Third"
          // ),
        ],
      ),
      body: PageView(
        controller: _pageController,
        onPageChanged: (page) {
          setState(() {
            currentIndex = page;
          });
        },
        children: <Widget>[
          ChildWidget(number: AvailableNumber.First),
          ChildWidget(number: AvailableNumber.Second),
          ChildWidget(number: AvailableNumber.Third),
          // ChildWidget(number: AvailableNumber.Third)
        ],
      ),
    );
  }
}
