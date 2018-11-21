<?php
require('vendor/autoload.php');
//namespace jetwaves\carbon_date_util;
use Carbon\Carbon;


printf("Right now is %s".PHP_EOL, Carbon::now()->toDateTimeString());
printf("Right now in Vancouver is %s".PHP_EOL, Carbon::now('America/Vancouver'));  //implicit __toString()

$tomorrow = Carbon::now()->addDay();
$lastWeek = Carbon::now()->subWeek();
$nextSummerOlympics = Carbon::createFromDate(2016)->addYears(4);

$officialDate = Carbon::now()->toRfc2822String();

$howOldAmI = Carbon::createFromDate(1975, 5, 21)->age;

$noonTodayLondonTime = Carbon::createFromTime(12, 0, 0, 'Europe/London');

$internetWillBlowUpOn = Carbon::create(2038, 01, 19, 3, 14, 7, 'GMT');

// Don't really want this to happen so mock now
Carbon::setTestNow(Carbon::createFromDate(2000, 1, 1));

// comparisons are always done in UTC
if (Carbon::now()->gte($internetWillBlowUpOn)) {
    die();
}

// Phew! Return to normal behaviour
Carbon::setTestNow();

if (Carbon::now()->isWeekend()) {
    echo 'Party!';
} else {
    echo 'not weekend'.PHP_EOL;
}
echo Carbon::now()->subMinutes(2)->diffForHumans().PHP_EOL; // '2 minutes ago'

// ... but also does 'from now', 'after' and 'before'
// rolling up to seconds, minutes, hours, days, months, years

$daysSinceEpoch = Carbon::createFromTimestamp(0)->diffInDays();

$now = Carbon::now()->timestamp;
echo 'now ts ='.$now.PHP_EOL;

$today8h50str = Carbon::now()->format('Y-m-d 20:50:00');
echo $today8h50str.PHP_EOL;

$startOfCriticalTime = Carbon::createFromTimeString(Carbon::now()->format('Y-m-d 20:50:00'))->timestamp;
echo $startOfCriticalTime.PHP_EOL;
$endOfCriticalTime = Carbon::createFromTimeString(Carbon::now()->format('Y-m-d 21:30:00'))->timestamp;
echo $endOfCriticalTime.PHP_EOL;

$nowTs = Carbon::now()->timestamp;
if($nowTs > $startOfCriticalTime && $nowTs < $endOfCriticalTime){
    echo 'NOW IS critical time'.PHP_EOL;
} else {
    echo 'Flat wind flat waves'.PHP_EOL;
}



