# Testing legacy code: Hard-wired dependencies

Code related to my [Testing legacy code: Hard-wired dependencies][1] blog post. Try not reading the blog post before doing the exercise yourself.

## What is it about?

Provides an example of existing code that needs to be unit tested. But there is one rule:

> We can't change any existing code if not covered by tests. The only exception is if we need to change the code to add unit tests, but in this case, just automated refactorings (via IDE) are allowed.

Although this is a very small piece of code, it has a lot of the problems that we find in legacy code.

## Details

If you want to give it a go, the starting point is [TripServiceTest.cs][3] and [TripService.cs][4]. Try unit testing it following the rule above.

For future comparisions, when you are done, you can always check [TripService_Original.cs][2]

[1]: http://craftedsw.blogspot.com/2011/07/testing-legacy-hard-wired-dependencies.html "Testing legacy code: Hard-wired dependencies blog post"
[2]: https://github.com/alastairs/trip-service-kata/blob/csharp-version/c%23/TripServiceKata/TripService_Original.cs "TripService_Original.cs"
[3]: https://github.com/alastairs/trip-service-kata/blob/csharp-version/c%23/TripServiceKata/TripServiceKata.Tests/TripServiceTest.cs "TripServiceTest.cs"
[4]: https://github.com/alastairs/trip-service-kata/blob/csharp-version/c%23/TripServiceKata/TripServiceKata/Trip/TripService.cs "TripService.cs"

## .NET code coverage

Tools:

- Coverlet to generate XML:

  - Download: dotnet add package coverlet.collector
  - Run: dotnet test --collect:"XPlat Code Coverage"
  - Docs: https://github.com/coverlet-coverage/coverlet

- ReportGenerator for visual coverage report:

  - Download: dotnet tool install -g dotnet-reportgenerator-globaltool
  - Run: reportgenerator -reports:"Path\To\TestProject\TestResults\{guid}\coverage.cobertura.xml" -targetdir:"coveragereport" -reporttypes:Html
    (then open index.html in chrome)
    - Docs: https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-code-coverage?tabs=windows#generate-reports

- Visualise code coverage in editor if preferred: https://github.com/coverlet-coverage/coverlet#visual-studio-add-in
