<?php

return [
    'default' => 'mongodb',
    'connections' => [
        'database' => [
            'driver' => 'mongodb',
            // You can also specify your jobs specific database created on config/database.php
            'connection' => 'certifime',
            'table' => 'jobs',
            'queue' => 'default',
            'expire' => 60,
        ],
    ],
    'failed' => [
        'driver' => 'mongodb',
        // You can also specify your jobs specific database created on config/database.php
        'database' => 'certifime',
        'table' => 'failed_jobs',
    ],
];
